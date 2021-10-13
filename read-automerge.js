#!/usr/bin/node

const Automerge = require('automerge')

const fs = require("fs");

const { argv } = require('process');

var data = fs.readFileSync(argv[1]);

const doc = Automerge.load(data)

// To resolve the conflict simply write to the current branch file
console.log(doc.text.join(''))