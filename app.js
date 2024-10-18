// app.js file content
console.log("Hello World")

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
// We include fromEuroToDollar here as well because it needs to be exported



const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 146.2;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.006;
    return valueInPound;
}





module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound }