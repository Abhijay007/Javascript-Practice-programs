var decimal = 22
var binary = []


while (decimal > 0) {

    if (decimal % 2 != 0) {
        binary.push(1)
        decimal = (decimal - 1) / 2
    } else {
        binary.push(0)
        decimal = (decimal) / 2
    }

}

binary = binary.reverse()
binary = binary.join("")
console.log(binary)
