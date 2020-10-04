
let currentDate = new Date();

let day = currentDate.getDate();

let month = currentDate.getMonth() + 1;

let year = currentDate.getFullYear();


if (day < 10) {
    day = '0' + day;
}

if (month < 10) {
    month = '0' + month;
}

let formattedDate1 = month + '/' + day + '/' + year;
console.log(formattedDate1);

let formattedDate2 = month + '-' + day + '-' + year;
console.log(formattedDate2);

let formattedDate3 = day + '-' + month + '-' + year;
console.log(formattedDate3);

let formattedDate4 = day + '/' + month + '/' + year;
console.log(formattedDate4);