const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar (euro){
    return euro * 1.07
}
module.exports = { fromEuroToDollar };