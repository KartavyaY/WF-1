let counter = 0;

function creatOrder(foodItem){
    var restaurantName = "McD"
    console.log("Order ID: " + counter + " for " + foodItem);
    counter++;
}

creatOrder("Burger");
creatOrder("HotDog");

let restaurantName = {
    name: "Starbucks",
    printWelcome: function() {
        console.log("Welcome to "+this.name);
    }
}

let restaurantName2 = {
    name: "Johnson",
}

let restaurantName3 = {
    name: "Joseph",
}

console.log(restaurantName.printWelcome.call(restaurantName2));

let restaurantNameNew = restaurantName.printWelcome.bind(restaurantName3);

restaurantNameNew();


function applyDiscount(discount, tax) {

    let initPrice = this.price;
    console.log("Initial Price: " + initPrice);

    let discountPrice = initPrice - (initPrice * discount);
    console.log("Discounted Price: " + discountPrice);

    let finalPrice = discountPrice + (discountPrice * tax);
    console.log("Final Price: " + finalPrice);
}

let burgerPrice = {
    price: 2000
}

applyDiscount.apply(burgerPrice,[0.5,0.1]);