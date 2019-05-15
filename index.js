'use strict';

const fileReader = require('./lib/reader.js');
const fileReaderPromises = require('./lib/reader-promises.js');
const fileReaderAsync = require('./lib/reader-async.js');

// Obtain and assert input
let files = process.argv.slice(2);

if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

fileReader(files, (err,data) => {
  if ( err ) { 
    console.warn('File(s) not found');
    return; 
  }
  console.log('From Callbacks: ', data);
});

fileReaderPromises(files);

fileReaderAsync(files);