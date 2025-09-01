//First

var cName = "NorthCap"
var a = 2
var b = 3

console.log((a * b) + (cName) + (a) + (b) + (cName) + (a) + (b - a))

//Second

var SEED = "CS-27A"

let digitSum = 0;
let letters = "";
let hyph = "";

for (let i = 0; i < SEED.length; i++) {
    const char = SEED[i];

    if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char == '-') {

        if (letters.length < 2) {
            letters += char;
        }

        if (hyph.length != 1) {
            hyph += '-';
        }

    }

    if (hyph == '-') {
        if (char >= '0' && char <= '9') {
            digitSum += parseInt(char);
        }
    }


}

let finalOut = letters + digitSum;

if (digitSum % 2 == 0) {
    finalOut += 'E'
} else {
    finalOut += 'O'
}

console.log(finalOut)

//Third

let NAME = "Sumit Kumar";
let generatedNameFirst = "";
let generatedNameLast = "";

for (let i = 0; i < NAME.length; i++) {
    const char = NAME[i];

    if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {

        if (generatedNameFirst.length < 3) {
            if (generatedNameFirst.length == 0) {
                generatedNameFirst += char.toUpperCase();
            } else {
                generatedNameFirst += char.toLowerCase();
            }
        }
    }
}

for (let i = NAME.length - 1; i >= 0; i--) {

    const char = NAME[i];

    if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
        if (generatedNameLast.length < 2) {
            generatedNameLast = char.toLowerCase() + generatedNameLast;
        }
    }
}

let UNAME = generatedNameFirst +generatedNameLast
console.log(UNAME + NAME.length)

//Fourth

let ageStr = "55";
let hasPassStr = "false";
let routeStr = "express";

let allotedGate = "Unallocated";

for (let i = 0; i < ageStr.length; i++) {
    const char = ageStr[i];
    if (char > '9') {
        console.log("Invalid Age")
    }
}

if (hasPassStr === "true" || ageStr >= 60) {
    allotedGate = "Gate A"
}else{
    if (routeStr === "express") {
        allotedGate = "Gate B"
    }else{
        allotedGate = "Gate C"
    }
}

console.log(allotedGate);

//Fifth

const numberOfTerms = 10;

let num1 = 0;
let num2 = 1;
let nextTerm;

console.log("Fibonacci Sequence:");

for (let i = 1; i <= numberOfTerms; i++) {

    console.log(num1)
    nextTerm = num1 + num2;
    num1 = num2;
    num2 = nextTerm;
    
}

