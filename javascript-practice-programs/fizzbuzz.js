//printing fizzbuzz pattern
const n = +process.argv[2];
function print(){
let i = 1;
while(i<=n){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
        i++;
    }
    else if(i%3==0){
        console.log("Fizz");
        i++;
    }
    else if(i%5==0){
        console.log("Buzz");
        i++;
    }
    else{
    console.log(i);
    i++;
    }
}
}
print(n);