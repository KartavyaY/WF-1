let auctionIntervalId = null;
let remaining = 0;

function startAuction(onEnd) {
  remaining = 10;
  console.log(`Auction ends in: ${remaining}`);
  auctionIntervalId = setInterval(() => {
    remaining--;
    if (remaining > 0) {
      console.log(`Auction ends in: ${remaining}`);
    } else {
      clearInterval(auctionIntervalId);
      auctionIntervalId = null;
      onEnd("Auction closed");
    }
  }, 1000);
}

function pause() {
  if (auctionIntervalId) {
    clearInterval(auctionIntervalId);
    auctionIntervalId = null;
    console.log("(Paused)");
  }
}

function resume(onEnd) {
  if (!auctionIntervalId && remaining > 0) {
    console.log("(Resumed)");
    auctionIntervalId = setInterval(() => {
      remaining--;
      if (remaining > 0) {
        console.log(`Auction ends in: ${remaining}`);
      } else {
        clearInterval(auctionIntervalId);
        auctionIntervalId = null;
        onEnd("Auction closed");
      }
    }, 1000);
  }
}

// demo:
startAuction(msg => console.log(msg));
setTimeout(pause, 3000);  // pause at around 7
setTimeout(() => resume(msg => console.log(msg)), 5000); // resume after pause
