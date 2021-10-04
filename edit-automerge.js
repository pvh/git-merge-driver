#!/usr/bin/node

const Automerge = require('automerge')

const fs = require("fs");

var data = fs.readFileSync(0);
var doc = Automerge.load(data)

doc = Automerge.change(doc, d => { d.text.insertAt(d.text.length, process.argv[2]) } )

process.stdout.write(Automerge.save(doc))
