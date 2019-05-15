'use strict';

const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);

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

const readAll = async (paths) => {
  let contents = [];

  try {
    for (let path of paths) {
      let result = await readFilePromise(path);
      contents.push(result.toString().trim());
    }; 
    console.log('From Async/Await: ', contents);
  }
  catch(err) {
    console.warn('File(s) not found');
    return;
  } 
};