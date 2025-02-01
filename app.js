const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))



// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD
}
const fromDollarToYen = (dollar) =>{
    let yen =  (dollar / oneEuroIs.USD) * oneEuroIs.JPY
    return yen 
}

const fromYenToPound = (yen) => {
    let pound = (yen / oneEuroIs.JPY) * oneEuroIs.GBP
    return pound
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen , fromYenToPound, oneEuroIs};