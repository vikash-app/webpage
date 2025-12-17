#!/bin/bash

# fix-release-branch.sh - Script to fix "branch already exists" release errors
# Usage: ./scripts/fix-release-branch.sh <branch-or-tag-name>

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get the branch/tag name from argument or use default
RELEASE_REF="${1:-next/account}"

echo -e "${YELLOW}Checking for existing release branch/tag: ${RELEASE_REF}${NC}"
echo ""

# Check if it's a local branch
if git show-ref --verify --quiet "refs/heads/${RELEASE_REF}"; then
    echo -e "${YELLOW}Found local branch: ${RELEASE_REF}${NC}"
    read -p "Do you want to delete the local branch? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git branch -D "${RELEASE_REF}"
        echo -e "${GREEN}✓ Deleted local branch${NC}"
    fi
fi

# Check if it's a remote branch
if git ls-remote --heads origin "${RELEASE_REF}" | grep -q "${RELEASE_REF}"; then
    echo -e "${YELLOW}Found remote branch: ${RELEASE_REF}${NC}"
    
    # Show the last few commits on this branch
    echo -e "\nLast 5 commits on this branch:"
    git log "origin/${RELEASE_REF}" --oneline -5 2>/dev/null || echo "(Unable to fetch commit history)"
    echo ""
    
    read -p "Do you want to delete the remote branch? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git push origin --delete "${RELEASE_REF}"
        echo -e "${GREEN}✓ Deleted remote branch${NC}"
    fi
fi

# Check if it's a local tag
if git show-ref --verify --quiet "refs/tags/${RELEASE_REF}"; then
    echo -e "${YELLOW}Found local tag: ${RELEASE_REF}${NC}"
    
    # Show tag information
    echo -e "\nTag details:"
    git show "${RELEASE_REF}" --no-patch 2>/dev/null || echo "(Unable to fetch tag details)"
    echo ""
    
    read -p "Do you want to delete the local tag? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git tag -d "${RELEASE_REF}"
        echo -e "${GREEN}✓ Deleted local tag${NC}"
    fi
fi

# Check if it's a remote tag
if git ls-remote --tags origin "refs/tags/${RELEASE_REF}" | grep -q "${RELEASE_REF}"; then
    echo -e "${YELLOW}Found remote tag: ${RELEASE_REF}${NC}"
    read -p "Do you want to delete the remote tag? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git push origin --delete "refs/tags/${RELEASE_REF}"
        echo -e "${GREEN}✓ Deleted remote tag${NC}"
    fi
fi

# Final check
echo ""
echo -e "${GREEN}Cleanup complete!${NC}"
echo ""
echo "You can now retry your release process."
echo ""
echo "If you need to check for other stale branches, run:"
echo "  git branch -a | grep next"
echo "  git tag | grep next"
