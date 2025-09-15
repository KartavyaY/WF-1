function startOrder(askForRating) {
  console.log("Order accepted");
  setTimeout(() => {
    console.log("Food is being prepared");
    setTimeout(() => {
      console.log("Out for delivery");
      setTimeout(() => {
        console.log("Delivered");
        askForRating();
      }, 2000);
    }, 3000);
  }, 2000);
}

// demo:
startOrder(() => console.log("Please rate your experience!"));
