# 2025InfoLec-ex-GitnGithub

This project teaches you to use git, Github, and demonstrates the Lightdance workflow.

## I'm Melody!!!!!!!!!!!!!!!!!!!!!!!!!!!

## Usage

1. Fork a copy from the organization repo.
2. Clone the repo to local.
```
git clone <your_repo>
cd <folder>

# set upstream
git remote add upstream git@github.com:NTUEEInfoDep/2025InfoLec-ex-GitnGithub.git

# Don't push to the upstream main
git remote set-url --push upstream no_push

# Make sure don't accidentally merge
git config --add merge.ff only
git config --add pull.ff only
git config pull.rebase true

# check your setup
git remote -v
```
3. Create a GitHub issue in organization repo.
4. Sync with upstream, then open a new branch for the issue.
```
# sync with the organization repo
git checkout main
git fetch upstream
git rebase upstream/main

# check commits
git log --oneline

# create branch
git checkout -b "SERVER-#[ISSUE_ID]"
git remote -v
```
5. Develop & create commits on the branch.
```
git add <files>
git commit -m "<message>" # no Chinese
```
6. Keep track of upstream/main.
```
git fetch upstream
git rebase upstream/main
```
7. Push local feature branch to origin.
```
# -u: Create remote branch if not exist
git push -u origin SERVER-{ISSUE_ID}
# If you fail because of rebasing
git push -u -f origin SERVER-{ISSUE_ID}
```
8. Create a pull request (PR) on GitHub (Mention your issue in PR).

## Practice

Find the hidden flag (format: `BIGBEE{...}`) in the repo.