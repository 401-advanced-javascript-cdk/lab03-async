'use strict';

const fs = require('fs');

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = async (files) => {
  try {
    let contents = await readAll([...files]);
    return contents;
  }
  catch(e) {
    return;
  }
};

const readAll = (paths) => {
  let contents = [];

  try {
    for (let path of paths) {
      let result = fs.readFile(path);
      contents.push(result.toString().trim());
    } 
    console.log('From Async/Await: ', contents);
  }
  catch(err) {
    console.warn('File(s) not found');
    return;
  } 
};