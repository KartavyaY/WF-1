function later(msg, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(msg), ms);
  });
}

later("A", 200)
  .then(console.log)
  .finally(() => console.log("A done"));

later("B", 100).then(console.log);

console.log("Start");
