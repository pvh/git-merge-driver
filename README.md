---
maintainer: pvh
---

# git-merge-driver-automerge

This is a simple example of a git custom merge driver for automerge. It is derived from https://github.com/Praqma/git-merge-driver but any problems are my own fault.

Included in this repository is a not-very-promising approach to merging text files paired with more canonical .mrg files.

## Demo

Run `example.sh` for a demonstration of the merge driver.
It will create a merge conflict in the repository, causing the merge driver to start and resolve the conflict.

## Documentation

### git config

First up is defining the merge driversd.
This is done via local git config. See `mergetool-setup.sh` for an example. Unfortunately, each user must run these commands in their own directory.

For more, visit [git-scm.com - Git Attributes](https://git-scm.com/docs/gitattributes).

#### Distribution

Note that, much like git hooks, the `.git/config` file can't be checked in/shared through the repository.
A common way of distributing merge drivers is to check the configuration file in elsewhere and provide a script to copy it to `.git/config`.
In this repository, the merge driver is configured in the `.gitconfig` file, which is copied to `.git/config` by the `mergetool-setup.sh` script.

### merge driver

For a successful merge, the merge driver is expected to leave the merge result at `%A`'s path and exiting with status code `0`.

If the merge went awry, the merge driver can exit with a non-zero status code.

_Note_: Any tools or scripts called by the merge driver must be available on `PATH`.

### git attributes

You configure the file patterns you want the merge driver to be used for in the `.gitattributes` file:

```
*.mrg merge=my-custom-driver
```

### Resources

- [git-scm.com - Git Attributes](https://git-scm.com/docs/gitattributes)
- [stackoverflow.com - 'How do I add a custom merge strategy?'](https://stackoverflow.com/questions/23140240/git-how-do-i-add-a-custom-merge-strategy)
- [stackoverflow-com - 'Add a git merge driver to the repository'](https://stackoverflow.com/questions/8839496/add-a-git-merge-driver-to-the-repository)
