let str = "Learning JavaScript"; 

// encoding the string
let result = window.btoa(str);
console.log(result);

// decoding the string
let result1 = window.atob(result);
console.log(result1);