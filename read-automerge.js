#!/usr/bin/node

const Automerge = require('automerge')

const fs = require("fs");

var data = fs.readFileSync(0);

const doc = Automerge.load(data)

// To resolve the conflict simply write to the current branch file
console.log(doc.text.join(''))