//First

var NAME = "Priya Sharma"
var Department = "CSE"

var SEED = "CSE-27"

var sum = parseInt(SEED.charAt(4)) + parseInt(SEED.charAt(5))

var checkCode = (sum*7) % 97
console.log(NAME)
console.log(Department)
console.log(SEED)
console.log(checkCode)


//Second

var servings = 3
var calories = 2000

function perServing(){
    return servings/calories
}

var macroCal = perServing()

//Third

var SEEDnew = "TIX-946"
var price = 1000

var lastDigit = parseInt(SEEDnew.charAt(-1))

var discount = 0

if (lastDigit>=0 && lastDigit<=3) {
    discount = 5
}
if (lastDigit>=4 && lastDigit<=6) {
    discount = 10
}
if (lastDigit>=7 && lastDigit<=9) {
    discount = 15
}

var finalPrice = price - (price*15/100)

console.log(finalPrice)