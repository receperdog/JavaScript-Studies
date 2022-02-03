//Create an array
let fruits = ["Apple", "Banana"];

//Loop over an Array
fruits.forEach(function (fruitName, indexOfFruit, fruits) {
  console.log(fruitName, indexOfFruit);
});
/* output will be 
Apple 0
Banana 1
*/

//Add an item to end of an Array
fruits.push("Orange");
fruits.forEach(function (fruitName, indexOfFruit, fruits) {
  console.log(fruitName, indexOfFruit);
});

//Remove an item from the end of an Array
fruits.pop();
fruits.forEach(function (fruitName, indexOfFruit, fruits) {
  console.log(fruitName, indexOfFruit);
});

//Remove an item by index position
console.log('Removed');
fruits.splice(1,2);//Banana removed
fruits.forEach(function (fruitName, indexOfFruit, fruits) {
  console.log(fruitName, indexOfFruit);
});

//Copy an Array
let newArray = [...fruits];
newArray.forEach(function (fruitName, indexOfFruit, newArray) {
    console.log(fruitName, indexOfFruit);
  });