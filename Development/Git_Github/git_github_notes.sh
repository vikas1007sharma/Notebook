Git: A version control system. Tracks changes in our code and allows collaboration.Works locally on your computer.

GitHub: A cloud-based platform for hosting Git repositories. Stores your code online, enabling collaboration and sharing. 

# Git Setup
# Download and install Git from https://git-scm.com
# After installation, configure Git with your email and name
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
git config --list  # Confirm configurations

# Initializing & Pushing a Repo
git init                          # Initialize a Git repository
git add .                         # Stage all changes
git commit -m "Initial commit"    # Commit changes
git branch -M main                # Rename master branch to main
git remote add origin <repo-url>  # Add GitHub repository
git push -u origin main           # Push to GitHub main branch

# Viewing & Managing Logs
git log                           # View commit history
echo "node_modules/" > .gitignore # Ignore files or directories

# Branching
git branch                        # List branches
git branch bug-fix                # Create a new branch 'bug-fix'
git switch bug-fix                # Switch to 'bug-fix' branch
git log                           # View log of the current branch

# Creating and Switching Branches
git switch -c dark-mode           # Create and switch to 'dark-mode'
git checkout main                 # Switch back to main
git checkout -b orange-mode       # Create and switch to 'orange-mode'

# Merge Branches
git checkout main                 # Switch to main
git merge bug-fix                 # Merge bug-fix into main

# Merge Conflicts
# Resolve conflicts by choosing:
# - Accept Current Change
# - Accept Incoming Change
# - Accept Both Changes
# - Compare Changes
git merge --abort                 # Cancel the merge

# Rename and Delete Branches
git branch -m old-branch new-branch  # Rename a branch
git branch -d branch-name            # Delete a local branch

# Git Diff (View Changes)
git diff                             # Unstaged changes in working directory
git diff --staged                    # Staged changes vs. last commit
git diff branch1 branch2             # Compare branches
git diff commit1 commit2             # Compare specific commits

# Git Stash (Temporary Storage)
git stash                            # Save current changes temporarily
git stash list                       # List all stashes
git stash apply                      # Apply most recent stash
git stash apply stash@{0}            # Apply specific stash
git stash pop                        # Apply and remove stash
git stash drop                       # Remove a specific stash
git stash clear                      # Clear all stashes

# Git Tags (Mark Versions)
git tag tag-name                     # Create a lightweight tag
git tag -a v1.0 -m "Release 1.0"     # Create annotated tag
git tag                              # List all tags
git tag tag-name commit-hash         # Tag a specific commit
git push origin tag-name             # Push tag to remote
git tag -d tag-name                  # Delete a tag locally
git push origin :tag-name            # Delete tag from remote

# Git Rebase (Move Base of Branch)
git checkout feature-branch
git rebase main                      # Replay commits from feature-branch onto main
# Resolve conflicts if any, then:
git add resolved-file
git rebase --continue

# Git Reflog (History of Commits)
git reflog                           # Show history of commits and actions
git reset --hard HEAD@{n}            # Reset to a specific reflog entry

# Recover Lost Commits
git reflog                           # Find the commit reference
git reset --hard <commit-hash>       # Reset to the specific commit hash




# Initialize a new Git repository
git init
git add <files>
git commit -m "Initial commit"

# Check Remote URL Settings
git remote -v

# Add Remote Repository with name origin (you can give any name)
git remote add origin <remote-url>
# Example
git remote add origin https://github.com/username/repo-name.git

# Push Code to Remote Repository (main branch push to origin repo)
git push origin main

# Set Up an Upstream Remote (for easier future pulls and pushes)
git push -u origin main

# Fetch vs. Pull Code from Remote Repository

# Fetch: Download code without merging
git fetch origin

# Pull: Download and merge code
git pull origin main
