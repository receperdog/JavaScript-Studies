/*Primitives Types in JS There are 7 primitive data types in JS: string, number, bigint, boolean, undefined, symbol and null
 source: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 */
/**
 * All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.
 * source: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 */

//string
let name = "recep";
console.log(typeof name); //You can see the type of name as a string.

//number
let cash = 10.8;
console.log(typeof cash); //You can see the type of name as a number.

//boolean
let isActive = false;
console.log(typeof isActive); //You can see the type of name as a boolean.

//undefined
let recep;
console.log(typeof recep); //You can see the type of name as a undefined.

//null
let erdogan = null;
console.log(typeof erdogan); //This is an exceptional case. You will see the Object on the console of chrome but the type of null is an primitive data.
