function divideP(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("Division by zero"));
    } else {
      resolve(a / b);
    }
  });
}

// First call
divideP(10, 2)
  .then(result => console.log(result))
  .finally(() => console.log("done 1"));

// Second call
divideP(5, 0)
  .then(result => console.log(result))
  .catch(err => console.log(err.message))
  .finally(() => console.log("done 2"));
