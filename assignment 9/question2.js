function startStreak(onDone) {
  let t = 0;
  const intervalId = setInterval(() => {
    t++;
    console.log(`Keep going! t=${t}s`);
    if (t === 5) {
      clearInterval(intervalId);
      onDone(t);
    }
  }, 1000);
}

// demo:
startStreak(total => {
  console.log(`Streak complete: ${total}s`);
});
