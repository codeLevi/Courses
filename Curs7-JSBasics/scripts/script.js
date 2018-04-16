//alert("My first alert from different file!");

var x;
x=2;
console.log(x);

//numbers
var age=14;
console.log("My age is",age);

var price=23.99;
console.log("Product price is", price, "£!");

var fullName="Ambarus Levente";
console.log("My name is", fullName);

var paragraph="Line1 \nLine 2";
console.log(paragraph);

var backslash="variable with \"";
console.log(backslash);

var quotes="\"this is a string inside quotes\"";
console.log(quotes);

var differentQuotes='"another string inside quotes"';
console.log(differentQuotes);

var isTrue=true,
    isFalse=false;
console.log(isTrue,isFalse);

var nullValue=null;
console.log("Null value", nullValue);

var undefinedValue;
console.log("Undefined value", undefinedValue);

var x=2;
console.log(x);
x=undefined;
console.log(x);

console.log(43%10); //3 restul impartirii

console.log(2=='2'); //true

console.log(2==='2'); //false pentru ca verifica si tipul

console.log(2===2); //true

console.log(typeof 10); //number

console.log(typeof "text"); //string

console.log(typeof true); //boolean

console.log(typeof false); //boolean

console.log(typeof myVariable); //undefined

console.log(typeof nullValue); //object

console.log(typeof nullValue===null); //false

var n=10;
// var isPositive= n>0? true:false;
var isPositive= n>0? 1:0;
console.log("is positive", isPositive);

var p=1+1;
var q=q*2;
console.log(p,q);

var firstName = "Chuck";
var lastName = "Norris";

var fullName = firstName + " " + lastName;
console.log("fullName", fullName);

var names = ['eugen', 'horea', 'levi', 'florina', 'sasha', 'mela'];
console.log(names[4]);
console.log(names.sort());
console.log('length',names.length);

//this is an object, walk is a method
var robot = {
  model: 'TRX1000',
  "full name":"Robot's Name",
  color: 'red',
  walk: function() {
    console.log('robot is walking');
  }
};

console.log('color', robot.color);
console.log('full name', robot["full name"]); //accesam robot full name.... robot.full name : incorect
robot.walk(); //accesam metoda walk

var color = "red"; //console.log(color); este variabila, colorul de mai sus este proprietate:nu are nici-o treaba

if (color === "red") {
  console.log("red color");
} else {
  console.log("not red");
}

// console.log('index', email.indexOf("@"));
var email = "melania.moldovan@scoalainformala.ro";
if(email.indexOf("@") > -1) { //ha -1 akkor nincs benne az arrayben 0123456...
  console.log("email correct");
} else {
  console.log("email incorrect");
}

// if (weather === 'rainy') {
//  console.log("Bring an umbrella.");
// } else if (weather === 'sunny') {
//  console.log("Dress lightly.");
// } else if (weather === 'sunny') {
//  console.log("Go outside.");
// } else {
//  console.log("Unknown weather type!");
// }

var weather = 'okey'
switch (weather) {
 case 'rainy':
 console.log("Bring an umbrella.");
 break;
 case 'sunny':
 console.log("Dress lightly.");
 break;
 case 'cloudy':
 console.log("Go outside.");
 break;
  case 'snowing':
 console.log("Go boarding!");
 break;
  default: 
    console.log("asd")
} //same as if-else


var i = 15;
while (i<10) {
  console.log('number', i);
  i++; //i=i+1
} //ameddig az i kisebb mint 10 addig ismetlodik 
console.log('while done');

var j = 15;
do {
  console.log('j', j);
  j++;
} while (j<10);
console.log('while done'); 
//eloszor vegrehajtja a 15ot

var numbers = [4,6,8,2,5,7];
for (var k = 0; k < numbers.length; k++) {
  console.log('position k', k);
  console.log('element at position k', numbers[k]);
}























































































