#!/usr/bin/node

const Automerge = require('automerge')
const fs = require("fs");
const { argv } = require('process');
const path = require('path');

// This is the information we pass through in the driver config via
// the placeholders `%A %P`
// %A = tmp filepath to our version of the conflicted file
// %P = path of destination file
const ourFile = argv[2];
const destination = argv[3];

// This script assumes (stupidly) that the .mrg file is already merged by now. 

// Hope it is!

fs.readFile(destination + '.mrg', (err, data) => {
    if (err) { console.log(err); return }
    const crdt = Automerge.load( data )
    fs.writeFile(path.basename(ourFile), crdt.text.join(''), (err) => { if (err) console.log(err)})
})
