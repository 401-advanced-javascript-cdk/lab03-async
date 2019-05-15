'use strict';

const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files) => {
  try {
    return new Promise((resolve, reject) => {
      let contents = readAll([...files]);
      resolve(contents);
    });
  }
  catch(e) {
    return;
  }
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = (paths) => {
  let contents = [];

  try {
    readFilePromise(paths[0])
  
    .then((data) => {
  
      contents.push(data.toString().trim());
      readFilePromise(paths[1])
    
      .then((data) => {
  
        contents.push(data.toString().trim());
        readFilePromise(paths[2])
  
        .then((data) => {
  
            contents.push(data.toString().trim());
            console.log('From Promises: ', contents);
  
        })
        .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
  }
  catch(err) {
    console.warn('File(s) not found');
    return;
  }
}