'use strict';

const fs = require('fs');

const args = process.argv.slice(2);

console.log({args});

fs.readFile(args[0], 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});