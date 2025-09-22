const ticketP = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ id: 101, status: "issued" });
  }, 300);
});

// Consumer 1
ticketP.then(ticket => console.log("Received ticket", ticket.id));

// Consumer 2
ticketP.then(ticket => console.log("Status", ticket.status));

// Consumer 3
ticketP
  .then(ticket => console.log(ticket))
  .catch(err => console.log("Error:", err))
  .finally(() => console.log("Chain 3 done"));
