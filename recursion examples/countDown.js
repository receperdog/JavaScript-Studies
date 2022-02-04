let countDown = (number) => {
  if (number === 0) {
    return 0;
  } else {
    console.log(number);
    return countDown(--number);
  }
};

countDown(100);
