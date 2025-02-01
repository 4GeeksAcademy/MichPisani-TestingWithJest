
const { oneEuroIs } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    const { sum } = require('./app.js');
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test(`One euro should be ${oneEuroIs.USD} dollars`, function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * oneEuroIs.USD; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test ("From dollar to yen", () =>{
    //Importing function
    const { fromDollarToYen } = require('./app.js');

    //Using the function
    const yens = fromDollarToYen(107);

    //Expected result
    const yensExpected = (107 / oneEuroIs.USD) * oneEuroIs.JPY;

    expect(yens).toBe(yensExpected); 
})

test ("Fron yen to pound", ()=>{
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(1565);

    const poundsExpected = (1565 / oneEuroIs.JPY) * oneEuroIs.GBP;

    expect(pounds).toBe(poundsExpected);
})
    