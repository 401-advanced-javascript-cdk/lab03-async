![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================


## Lab 03 - Async
Uses three methods for performing asynchronous functions.  `reader.js` uses callbacks, `reader-promise.js` uses the Promise object constuctor, `reader-async.js` uses `async` and `await`.
### Author: Chris Kozlowski

### Links and Resources
* [Submission PR]( --- )
* [Travis]( --- )

### Modules
#### `reader.js`
##### Exported Values and Methods
###### `readAll(arr, callback) -> readAll(arr, callback) -> readOne(path, errFirstCallback)`

#### `reader-promise.js`
##### Exported Values and Methods
###### `Promise.resolve() <- readAll([arr]) <- readFilePromise(path)`  

#### `reader-async.js`
##### Exported Values and Methods
###### `async fn() -> await readAll(arr) -> await fs.readFile(path)`  

####  Instructions
* Clone repository
* `npm install` in the root directory
* #### `npm run index`
* #### `npm run edit-file`

#### Tests
* `npm test`