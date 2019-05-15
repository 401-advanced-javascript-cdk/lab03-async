'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-async.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader(files).then((results) => { expect(results).toBeUndefined() })
    done();
    });

  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    reader(files)
    .then((results) => {
      expect(results instanceof Array).toBeTruthy();
      expect(data.length).toBe(3);
    })
    .catch((err) => expect(err).toBeUndefined());
    done(); 
  });

});
