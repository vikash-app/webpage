# Release Guide

## Understanding the "Branch Already Exists" Error

When you see the error:
```
Error: next/account already exists. You are probably trying to cut a version that was already cut
```

This means that the release process is trying to create a branch or tag with the name `next/account`, but that name already exists in your Git repository. This typically happens during automated release workflows when:

1. A previous release was attempted but not completed
2. The same version is being released again
3. A release branch wasn't properly cleaned up after merging

## What Does This Error Mean?

The release tooling (likely using semantic-release, standard-version, or a custom release script) creates branches with specific naming conventions to track releases. The format `next/account` suggests:
- `next` - the release channel or version being prepared
- `account` - the package or module name

When this branch or tag already exists, the release tool cannot proceed because it would conflict with the existing reference.

## How to Fix This Error

### Solution 1: Delete the Existing Branch (If the Release Failed)

If the previous release attempt failed and you need to retry:

```bash
# Check if it's a local branch
git branch -a | grep "next/account"

# Delete the local branch if it exists
git branch -D next/account

# Delete the remote branch if it exists
git push origin --delete next/account

# Now retry your release
```

### Solution 2: Delete the Existing Tag (If It's a Tag)

If the release tool uses tags instead of branches:

```bash
# Check for existing tags
git tag | grep "next/account"

# Delete the local tag
git tag -d next/account

# Delete the remote tag
git push origin --delete refs/tags/next/account

# Now retry your release
```

### Solution 3: Check and Complete the Previous Release

If the release was partially successful:

```bash
# Check if the release branch exists remotely
git ls-remote --heads origin next/account

# If it exists, you might want to:
# 1. Check if there's an open PR for it
# 2. Complete that PR if the release is still needed
# 3. Or delete it if it's stale

# View the branch contents
git fetch origin next/account
git log origin/next/account

# Delete if no longer needed
git push origin --delete next/account
```

### Solution 4: Use a Different Version/Channel

If you need to create a new release without conflicting:

```bash
# Instead of retrying the same release, increment the version
# For example, if cutting 1.2.0, try 1.2.1 or 1.3.0

# Or use a different release channel
# Instead of "next", use "beta", "alpha", "rc", etc.
```

## Prevention and Best Practices

### 1. Clean Up After Releases

Always clean up release branches after they're merged:

```bash
# After a successful release and merge
git push origin --delete next/account
```

### 2. Check Before Releasing

Before starting a new release:

```bash
# List all branches to check for conflicts
git branch -a | grep next

# List all tags
git tag | grep next
```

### 3. Use Automated Cleanup

Configure your release tooling to automatically delete branches after successful releases. For example, in GitHub Actions:

```yaml
- name: Cleanup release branch
  if: success()
  run: |
    git push origin --delete ${{ env.RELEASE_BRANCH }} || true
```

### 4. Document Your Release Process

Maintain a clear release process document that includes:
- Version numbering scheme
- Branch naming conventions
- Cleanup procedures
- Rollback steps

## Common Scenarios

### Scenario 1: Failed CI/CD Release

**Problem**: CI/CD pipeline started a release but failed midway.

**Solution**: 
1. Check CI/CD logs to understand why it failed
2. Fix the underlying issue
3. Delete the stale release branch
4. Retry the release

### Scenario 2: Manual Release Interruption

**Problem**: You started a manual release but interrupted it (Ctrl+C).

**Solution**:
1. Check `git status` for any pending changes
2. Reset or commit changes as needed
3. Delete the release branch
4. Start fresh

### Scenario 3: Duplicate Release Attempt

**Problem**: Trying to release the same version twice.

**Solution**:
1. Verify if the first release was successful
2. If yes, use a new version number
3. If no, clean up and retry

## Troubleshooting Commands

```bash
# Show all branches (local and remote)
git branch -a

# Show all tags
git tag -l

# Show remote branches only
git ls-remote --heads origin

# Show remote tags only
git ls-remote --tags origin

# Force delete a local branch
git branch -D branch-name

# Delete a remote branch
git push origin --delete branch-name

# Delete a local tag
git tag -d tag-name

# Delete a remote tag
git push origin --delete refs/tags/tag-name

# Clean up stale remote-tracking branches
git remote prune origin
```

## Getting Help

If you continue to experience issues:

1. Check your release tooling documentation (semantic-release, standard-version, etc.)
2. Review recent commits and release history: `git log --oneline --decorate`
3. Check for open PRs related to releases
4. Contact your team's release manager or DevOps team

## Additional Resources

- [Git Branch Management](https://git-scm.com/book/en/v2/Git-Branching-Branch-Management)
- [Git Tag Management](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
- [Semantic Versioning](https://semver.org/)
