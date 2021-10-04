# This script will run a quick demo of the merge driver.
# It will cause a merge conflict in a 'my-file.mrg' file.
# -------------------------------------------------------

# Run the mergetool-setup.sh script to configure the merge driver
./mergetool-setup.sh

# Add the my-merge-tool.sh to PATH
PATH=$PATH:`pwd`

# Clean up any previous example runs
git checkout master
git branch -D demo-branch-1
git branch -D demo-branch-2

# Create 'my-file.mrg' on branch 1
git checkout -b demo-branch-1
./make-automerge.js | ./edit-automerge.js "hello" > demo.mrg
git add demo.mrg
git commit -m"demo-branch-1: added hello"

git checkout -b demo-branch-2
cat demo.mrg | ./read-automerge.js
cat demo.mrg | ./edit-automerge.js " from branch-2" > demo.mrg
git add demo.mrg
git commit -m"demo-branch-2: added from branch-2"

#git checkout demo-branch-1
#cat demo.mrg | ./edit-automerge.js " from branch-1" > demo.mrg
#git add demo.mrg
#git commit -m"demo-branch-2: added from branch-1"

# Merge the two branches, causing a conflict
#git merge -m"Merged in demo-branch-2" demo-branch-2
#cat demo.mrg | ./read-automerge.js
