let countDown = (number) => {
  if (number === 0) {
    return;
  } else {
    console.log(number);
    return countDown(--number);
  }
};

countDown(100);
