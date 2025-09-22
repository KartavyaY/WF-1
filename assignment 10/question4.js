const tasks = ["T1", "T2", "T3"];

function processTask(task) {
  console.log("start", task);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("done " + task);
    }, 200);
  });
}

let chain = Promise.resolve();

for (const task of tasks) {
  chain = chain
    .then(() => processTask(task))
    .then(result => console.log(result));
}

chain.finally(() => console.log("All tasks processed"));
