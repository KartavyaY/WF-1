function startStockTicker(onSummary) {
  let lastPrice = 100;
  let renderTimeout = null;
  let elapsed = 0;

  const dataInterval = setInterval(() => {
    // simulate new price
    lastPrice += Math.floor(Math.random() * 5 - 2);
    console.log("data price:", lastPrice);

    // debounce UI render
    if (renderTimeout) clearTimeout(renderTimeout);
    renderTimeout = setTimeout(() => {
      console.log("UI render price:", lastPrice);
      renderTimeout = null;
    }, 1000);

    elapsed += 300;
    if (elapsed >= 5000) {
      clearInterval(dataInterval);
      if (renderTimeout) {
        // do final render
        clearTimeout(renderTimeout);
        console.log("UI render price:", lastPrice);
      }
      onSummary(lastPrice);
    }
  }, 300);
}

// demo:
startStockTicker(price => console.log("Summary last price:", price));
