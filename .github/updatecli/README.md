# Overview

This is how we manage adhoc dependency updates using `updatecli`.

## ECS Dependencies Update Automation

This directory contains updatecli configuration to automatically update ECS versions in the ecs-typescript repository.

### Overview

The automation tracks latest releases from the following repositories and updates corresponding dependencies in ecs-typescript:

- **elastic/ecs**

### Configuration Files

- **`ecs.yml`**: Main updatecli configuration that defines sources and targets
- **`values.d/scm.yml`**: Contains SCM configuration values for GitHub authentication

### GitHub Workflow

The automation runs via GitHub workflow `.github/workflows/generate.yml` which:
- Runs at 6:00 UTC every Monday to Friday
- Can be triggered manually via workflow_dispatch
- Uses the GitHub Secret Tokene for creating PRs

### Example Output

When new versions are detected, the automation will create a pull request similar to [ecs-typescript/43](https://github.com/elastic/ecs-typescript/pull/43) that was manually created previously.

### Manual Testing

To test the configuration locally:

```bash
export GITHUB_TOKEN=$(gh auth token)
export GITHUB_ACTOR=v1v
updatecli diff \
    --config .github/updatecli/ecs.yml \
    --values .github/updatecli/values.d/scm.yml
# Apply changes (requires write access to ecs-typescript repo)
updatecli apply \
    --config .github/updatecli/ecs.yml \
    --values .github/updatecli/values.d/scm.yml
```
