git config --local merge.automerge-driver.name "A custom driver used to merge binary automerge files. (.mrg)"
git config --local merge.automerge-driver.driver "node merge-automerge.js %A %B"

git config --local merge.automerge-text-driver.name "A custom driver used to merge markdown docs managed by automerge. (.md)"
git config --local merge.automerge-driver.driver "node merge-automerge-text.js %A %P"
