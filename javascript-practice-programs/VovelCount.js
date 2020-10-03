
function countVowel(str) { 

    let count = str.match(/[aeiou]/gi).length;
    return count;
}

let string = prompt('Enter a string: ');

let result = countVowel(string);

console.log(result);