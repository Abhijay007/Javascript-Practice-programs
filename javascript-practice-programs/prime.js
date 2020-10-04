const number = +process.argv[2];

function isPrime(number){
    if(number==1 || number==2){
        return true;
    }
    else{
        let start = 2;
        while(start<number){
           if(number%start==0){
           return false;
           }
           else{
            start++;
           }
        }
        return true;
    }
}
var answer = isPrime(number);
console.log(answer);

module.exports = {
    isPrime
};