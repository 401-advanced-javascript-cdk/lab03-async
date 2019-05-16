=================================================


## Lab 03 - Async
Uses three methods for performing asynchronous functions to read and write to text documents.  `reader.js` uses callbacks, `reader-promise.js` uses the JavaScript Promise object, `reader-async.js` uses `async` and `await`.
### Author: Chris Kozlowski

### Links and Resources
* [Submission PR](https://github.com/401-advanced-javascript-cdk/lab03-async/pull/1)
* [Travis](https://travis-ci.com/401-advanced-javascript-cdk/lab03-async)

### Modules
#### `reader.js`
##### Exported Values and Methods
###### `readAll(arr, callback) -> readAll(arr, callback) -> readOne(path, errFirstCallback)`

#### `reader-promise.js`
##### Exported Values and Methods
###### `Promise.resolve() <- readAll([arr]) <- readFilePromise(path)`  

#### `reader-async.js`
##### Exported Values and Methods
###### `async fn() -> await async readAll(arr) -> await fs.readFile(path)`  

####  Instructions
* Clone repository
* `npm install` in the root directory
* `npm run index` - Runs index.js in `node` with three arguments for text files.
* `npm run edit-file` - Runs edit-file.js in `node` with 1 argument for a text file.

#### Tests
* `npm test`