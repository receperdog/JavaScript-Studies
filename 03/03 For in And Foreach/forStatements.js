/**
 * The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
 * Given that for...in is built for iterating object properties, 
 * !!!!!!!!!!!!not recommended for use with arrays, and options like Array.prototype.forEach() and for...of exist, what might be the use of for...in at all?

It may be most practically used for debugging purposes, being an easy way to check the properties of an object (by outputting to the console or otherwise). Although arrays are often more practical for storing data, in situations where a key-value pair is preferred for working with data (with properties acting as the "key"), there may be instances where you want to check if any of those keys hold a particular value.

 * source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (const props in obj) {
  console.log(`obj.${props} = ${obj[props]}`);
}

//foreach
let arr = ["recep", "ahmet", "mehmet", "john", "elton"];
arr.forEach((element) => console.log(element));

let arrayTwo = [1, 2, 3, 4, 5];
let myForEach = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
};

myForEach(arrayTwo);
