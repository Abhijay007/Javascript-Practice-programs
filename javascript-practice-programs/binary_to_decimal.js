//function to convert binary no to decimal
const binaryToNumber = arr => {
    let len = arr.length
    let pow = []
    let decimal = []
    for(let i = 0; i <= len - 1; i++){
        pow.unshift(i)
    }
    arr.forEach((x,index) => {
        decimal.push(x*2**pow[index])
    })
    let toDecimal = decimal.reduce((acc, curr) => acc + curr, 0)
    return toDecimal
};

/* Enter the binary number in array form
[1, 1, 0, 1]
*/
const binaryArray = [] 
console.log(binaryToNumber(binaryArray));