'use strict';

const fs = require('fs');
const faker = require('faker');

const args = process.argv.slice(2);

console.log({args});

fs.readFile(args[0], 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Contents of test.txt: ', data);
  fs.writeFile(args[0], `${data}, ${faker.random.word()}`, (err) => {
    if (err) throw err;
    fs.readFile(args[0], 'utf8', (err, data) => {
      if (err) throw err;
      console.log('Contents of test.txt: ', data);
    });
  });
});