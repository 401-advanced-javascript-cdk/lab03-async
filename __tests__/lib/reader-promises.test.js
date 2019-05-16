'use strict';

jest.mock('fs');
// const util = require('util');
// const  = util.promisify(fs.readFile);

const reader = require('../../lib/reader-promises.js');

describe('File Reader Promises Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader(files).then((results) => { expect(results).toBeUndefined(); })
      .catch(e => console.log(e));
    done();
  });

  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    reader(files)
      .then((results) => {
        expect(results instanceof Array).toBeTruthy();
        expect(results.length).toBe(3);
      })
      .catch((err) => expect(err).toBeUndefined());
    done(); 
  });

  it('returns err', () => {
    reader(['','',''])
      .then((results) => {
        expect(results).toBeUndefined();
      })
      .catch((err) => {
        expect(err).toBeDefined();
      }); 
  });
});
