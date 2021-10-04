#!/usr/bin/node

const Automerge = require('automerge')

const fs = require("fs");
const { argv } = require('process');

// This is the information we pass through in the driver config via
// the placeholders `%A %B`
// %A = tmp filepath to our version of the conflicted file
// %B = tmp filepath to the other branches version of the file
const ourFile = argv[1];
const theirFile = argv[2];

const ours = Automerge.load(fs.readFileSync(ourFile))
const theirs = Automerge.load(fs.readFileSync(theirFile))

const merged = Automerge.merge(ours, theirs)

// To resolve the conflict simply write to the current branch file
fs.writeFileSync(ours, Automerge.save(merged, null, 2));