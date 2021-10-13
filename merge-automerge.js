#!/usr/bin/node

const Automerge = require('automerge')

const fs = require("fs");
const { argv } = require('process');
const path = require('path');

// This is the information we pass through in the driver config via
// the placeholders `%A %B`
// %A = tmp filepath to our version of the conflicted file
// %B = tmp filepath to the other branches version of the file
const ourFile = argv[2];
const theirFile = argv[3];

const ours = Automerge.load(fs.readFileSync(ourFile))
const theirs = Automerge.load(fs.readFileSync(theirFile))

const changes = Automerge.getAllChanges(theirs);
const [merged, ] = Automerge.applyChanges(ours, changes)

// To resolve the conflict simply write to the current branch file
fs.writeFileSync(ourFile, Automerge.save(merged), null, 2);

