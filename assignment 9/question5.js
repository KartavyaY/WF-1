let quizTimeoutId;
let finished = false;

function startQuiz(onWinner, onNoWinner) {
  finished = false;
  quizTimeoutId = setTimeout(() => {
    if (!finished) {
      console.log("Time up! No one answered");
      finished = true;
      onNoWinner();
    }
  }, 4000);

  return function press(player) {
    if (!finished) {
      finished = true;
      clearTimeout(quizTimeoutId);
      console.log(`${player} buzzed first!`);
      onWinner(player);
    }
  };
}

// Demo run 1: Player A wins at 1.5s
let press = startQuiz(
  player => console.log("Winner:", player),
  () => console.log("No winner")
);
setTimeout(() => press("Player A"), 1500);

// Demo run 2: Player B wins at 3.0s
setTimeout(() => {
  let press2 = startQuiz(
    player => console.log("Winner:", player),
    () => console.log("No winner")
  );
  setTimeout(() => press2("Player B"), 3000);
}, 6000);

// Demo run 3: no presses
setTimeout(() => {
  startQuiz(
    player => console.log("Winner:", player),
    () => console.log("No winner")
  );
  // no press call
}, 12000);
