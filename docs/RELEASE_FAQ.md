# Release Process FAQ

## Frequently Asked Questions

### Q: What does "next/account already exists" mean?

**A:** This error occurs when your release tooling tries to create a Git reference (branch or tag) with a name that already exists in your repository. The naming pattern `next/account` typically means:
- `next` = the release channel or stage
- `account` = the package/module name being released

### Q: Why does this happen?

**A:** Common causes include:
1. **Previous Failed Release**: A previous release attempt failed midway, leaving the branch/tag behind
2. **Incomplete Cleanup**: After a successful release, the release branch wasn't deleted
3. **Interrupted Process**: The release was manually interrupted (Ctrl+C)
4. **Duplicate Attempt**: Trying to release the same version twice
5. **CI/CD Issues**: Automated release pipeline failed but created the branch

### Q: How do I know if it's a branch or a tag?

**A:** Run these commands to check:
```bash
# Check for branches
git branch -a | grep "next/account"
git ls-remote --heads origin next/account

# Check for tags
git tag | grep "next/account"
git ls-remote --tags origin next/account
```

### Q: Is it safe to delete the branch/tag?

**A:** Before deleting:
1. Check if there's an open Pull Request for this branch
2. Review the commits: `git log origin/next/account` (for branches)
3. Check with your team if anyone is working on it
4. Verify in your release notes if this version was already released

If the release was never completed or deployed, it's generally safe to delete.

### Q: What if deleting doesn't work?

**A:** If you get permission errors:
```bash
# Error: You don't have permission to delete this
```

**Solutions:**
1. Check your Git permissions - you need write access to the repository
2. The branch might be protected - check your GitHub/GitLab branch protection rules
3. Contact a repository administrator for help

### Q: Can I just use a different version number?

**A:** Yes! Instead of deleting the existing reference, you can:
```bash
# If you were releasing 1.2.0, try:
# - Patch: 1.2.1
# - Minor: 1.3.0
# - Major: 2.0.0
```

However, this should only be done if the previous version was never actually released.

### Q: How can I prevent this in the future?

**A:** Best practices:
1. **Always complete releases**: Don't interrupt release processes
2. **Automate cleanup**: Configure your CI/CD to delete release branches after merging
3. **Use pre-release checks**: Add a check in your release script:
   ```bash
   if git ls-remote --heads origin next/account; then
     echo "Error: Release branch already exists"
     exit 1
   fi
   ```
4. **Document the process**: Keep your release runbook updated
5. **Monitor releases**: Use GitHub Actions/GitLab CI logs to track release status

### Q: What if this keeps happening?

**A:** If you're repeatedly encountering this issue:

1. **Review your release workflow**: There might be a bug in your release automation
2. **Check for race conditions**: Multiple CI jobs might be trying to release simultaneously
3. **Audit your git history**: Use `git reflog` to see what's been happening
4. **Consider a different naming strategy**: Use timestamps or UUIDs in branch names to avoid conflicts

### Q: How do I handle this in a CI/CD pipeline?

**A:** Add automatic cleanup to your pipeline:

```yaml
# GitHub Actions example
- name: Clean up stale release branches
  if: failure()
  run: |
    git push origin --delete next/account || true

# Or add a pre-release check
- name: Check for existing release
  run: |
    if git ls-remote --heads origin next/account | grep -q next/account; then
      echo "Cleaning up previous release attempt..."
      git push origin --delete next/account
    fi
```

### Q: What's the difference between a release branch and a release tag?

**A:**
- **Branch**: A movable reference that can have new commits added to it. Used during the release preparation phase.
- **Tag**: An immutable reference pointing to a specific commit. Used to mark the final released version.

Some tools use branches for preparing releases (with PRs for review), then create tags for the final release. Others use tags directly.

### Q: My release tool uses a different naming pattern. Will this still apply?

**A:** Yes! The same principles apply regardless of naming pattern. Common patterns include:
- `release/v1.2.3`
- `releases/next`
- `v1.2.3` (tags)
- `next/package-name`
- `release-1.2.3`

The error "already exists" means the same thing - a reference with that name already exists.

### Q: Can I rename the existing branch instead of deleting it?

**A:** Yes, if you want to preserve it for investigation:
```bash
# Rename locally
git branch -m next/account next/account-old

# Rename remotely
git push origin :next/account next/account-old
git push origin -u next/account-old
```

### Q: What if the release was partially successful?

**A:** This is more complex. You need to:
1. Check if the version was published (npm, PyPI, etc.)
2. Check if tags were created
3. Check if the release notes were published
4. Determine if you need to complete the release or roll back

If partially released, you might need to:
- Complete the remaining steps manually
- Or rollback and start fresh with a new version

### Q: How do I check if a version is already released?

**A:** Depending on your platform:
```bash
# For npm packages
npm view package-name versions

# For Python packages
pip show package-name  # Shows installed version
# Or check PyPI: https://pypi.org/project/package-name/

# For Git tags
git tag -l | grep v1.2.3

# For GitHub releases
gh release list

# For Docker images
docker pull your-image:version
```

### Q: Who should I contact for help?

**A:** Depending on the issue:
1. **Your team's release manager** - for process questions
2. **DevOps team** - for CI/CD and permissions issues
3. **Repository admins** - for branch protection and access issues
4. **Package registry admins** - for published package issues

## Additional Resources

- [Main Release Guide](../RELEASE_GUIDE.md)
- [Git Branch Management](https://git-scm.com/book/en/v2/Git-Branching-Branch-Management)
- [Semantic Versioning](https://semver.org/)
- [Release Automation Best Practices](https://github.com/semantic-release/semantic-release)
