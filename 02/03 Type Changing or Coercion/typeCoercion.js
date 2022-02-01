/**
 * Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.
 * source: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
 */

const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
//js coerce the value2 to change from number to string.

//In the following statement value1 change to from string to int with type casting.
sum = Number(value1) + value2;
console.log(sum);

//string to num
let num1 = Number("5");
let num2 = Number("2");
let total = num1 + num2;
console.log(total);

//num to string
let num = 10;
num = String(num);
console.log(typeof num); //change from num to string.

//bool to string
let bool = true;
bool = String(bool);
console.log(typeof bool);

//array to string
let arr = [1, 2, 3, 4];
arr = String(arr);
console.log(arr.length); // it equals to 7;
