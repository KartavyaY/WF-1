// 1) Coupon Engine (closure + default params)
function createCoupon(percent) {
    return function(price, mode = "round") {
        let discounted = price * (1 - percent / 100);
        switch (mode) {
            case "floor": return Math.floor(discounted * 100) / 100;
            case "ceil": return Math.ceil(discounted * 100) / 100;
            default: return Math.round(discounted * 100) / 100;
        }
    };
}
// Demo:
const tenOff = createCoupon(10);
console.log('1:', tenOff(199.99)); // → 180.0 (rounded)
console.log('1:', createCoupon(20)(999.99, "floor")); // → 799.99

// 2) Timed Logger (var vs let, scope)
console.log('2: (wrong with var)');
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log('Step', i); // All print 4
    }, 200 * i);
}
setTimeout(() => {
    console.log('2: (fixed with let)');
    for (let j = 1; j <= 3; j++) {
        setTimeout(function() {
            console.log('Step', j);
        }, 200 * j);
    }
}, 800);
// Explanation: With var, i is function-scoped and shared; with let, j is block-scoped and unique per iteration.

// 3) Hoisting Trap (declaration vs expression)
try {
    start(); // Error: start is not a function
} catch (e) {
    console.log('3:', e.message);
}
var start = function () { console.log("Starting..."); };
// Fixed version:
function start2() { console.log("Starting... (declaration)"); }
start2(); // works
// Explanation: Function declarations are hoisted with their body; function expressions are hoisted as undefined.

// 4) Profile Card (destructuring objects & arrays)
const resp = { id: 17, name: { first: "Asha", last: "Verma" }, address: { city: "Pune" }, favorites: ["music", "chai", "trekking"] };
const { name: { first: firstName, last = "Unknown" }, address: { city = "N/A" }, favorites: [fav1, fav2, ...others] } = resp;
console.log(`4: ${firstName} ${last} from ${city} likes ${fav1}, ${fav2}; others: ${others.join(", ")}`);

// 5) Invoice Math (call vs apply vs bind)
const invoice = { id: 5001, subtotal: 1200, tax: 0.18 };
function total(label, currency) {
    const t = this.subtotal * (1 + this.tax);
    console.log(`${label} #${this.id}: ${currency}${t.toFixed(2)}`);
}
total.call(invoice, "Total", "₹"); // call
total.apply(invoice, ["Grand Total", "USD"]); // apply
const totalINR = total.bind(invoice, "Total", "₹");
totalINR();
const invoice2 = { id: 5002, subtotal: 500, tax: 0.1 };
const totalINR2 = total.bind(invoice2, "Total", "₹");
totalINR2();
// call: args as list, apply: args as array, bind: returns new function with preset this/args.

// 6) Secure Counter (closure + encapsulation)
function makeCounter() {
    let count = 0;
    return {
        inc: () => ++count,
        value: () => count,
        reset: () => { count = 0; }
    };
}
const c = makeCounter();
console.log('6:', c.value()); // 0
c.inc();
console.log('6:', c.value()); // 1
c.reset();
console.log('6:', c.value()); // 0
c.count = 999;
console.log('6:', c.value()); // still 0

// 7) Shipping Rules (hoisting + const vs let)
try {
    if (true) {
        discount = 15;
        const discount = 10;
        console.log('7:', discount);
    }
} catch (e) {
    console.log('7:', e.message); // ReferenceError
}
let discount = 15;
if (true) {
    const discount = 10;
    console.log('7:', discount); // 10
}
console.log('7:', discount); // 15
// TDZ: Variables declared with let/const are not accessible before declaration within their scope.

// 8) Mini Curry (higher-order fn + partial application)
function between(min, max) {
    return function(x) {
        return x >= min && x <= max;
    };
}
const isAdult = between(18, 60);
console.log('8:', isAdult(22)); // true
console.log('8:', between(100, 500)(75)); // false

// 9) Roster Merge (destructuring + defaults + rest)
const rosterA = ["Diya","Aarav","Meera"];
const rosterB = ["Zoe","Ken"];
const [vip1, vip2, ...others9] = [...rosterA, ...rosterB];
console.log(`9: VIPs: ${vip1}, ${vip2} | Others: ${others9.join(", ")}`);

// 10) Context-aware Greeter (bind + event-like simulation)
const greeter = {
    name: "Campus JS Club",
    sayHello() { console.log(`10: Hello from ${this.name}!`); }
};
setTimeout(greeter.sayHello, 200); // wrong context
setTimeout(greeter.sayHello.bind(greeter), 400); // correct context
// Without bind, this is undefined or window/global; bind fixes the context.

// 11) Budget Planner (apply + array args)
function addAll(...nums){ return nums.reduce((a,b)=>a+b,0); }
const expenses = [499, 120, 350];
console.log('11:', addAll.apply(null, expenses)); // with apply
console.log('11:', addAll(...expenses)); // with spread
// Both give same result; apply takes array, spread expands array.

// 12) Module Pattern Lite (IIFE + closures)
const prefs = (function(){
    const store = {};
    return {
        set(key, val) { store[key] = val; },
        get(key) { return store[key]; },
        keys() { return Object.keys(store); }
    };
})();
prefs.set('theme','dark');
console.log('12:', prefs.get('theme'));
console.log('12:', prefs.keys());