console.log("hello world")
let reminderTimeoutId; // store timeout globally for this ticket

function startTimer(remindCb) {
  console.log("Ticket # 4172 received");
  reminderTimeoutId = setTimeout(() => {
    remindCb();
  }, 5000);
}

function acknowledge() {
  if (reminderTimeoutId) {
    clearTimeout(reminderTimeoutId);
    reminderTimeoutId = null;
    console.log("Ticket # 4172 acknowledged on time");
  }
}

// demo
function remind() {
  console.log("Reminder: Ticket # 4172 awaiting acknowledgment");
}

// Flow A: no timely acknowledgment
startTimer(remind); 
// (wait 5s → logs reminder)

// Flow B: timely acknowledgment
startTimer(remind);
setTimeout(() => acknowledge(), 3000); // ack at 3s cancels reminder
