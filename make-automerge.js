#!/usr/bin/node

const Automerge = require('automerge')

var doc = Automerge.init()
doc = Automerge.change(doc, d => { d.text = new Automerge.Text() } )

process.stdout.write(Automerge.save(doc))