//In this basic program I'm not checking the condition that number less than 0
let findFactorial = (number) => {
  if (number === 0) {
    return 1;
  } else {
    return number * findFactorial(number - 1);
  }
};
console.log(findFactorial(5));
