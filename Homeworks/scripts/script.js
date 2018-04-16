var number = 1;
while (number <= 20) {
  console.log('number', number);
  number++;
}



var oddnumber =1;
while (oddnumber<=20) {
  if(oddnumber%2!== 0) {
 console.log(oddnumber);
  }
  oddnumber++;
}


var sumArray = [4,6,2,6,3,68,9,5,76].reduce((a, b) => a + b, 0);
console.log(sumArray);

var maxArray = [4,6,2,6,3,68,9,5,76];
console.log(Math.max(...maxArray));

var howMany = [4,6,2,6,3,68,9,6,5,76,6];
var count = 0;
for(var i = 0; i < howMany.length; ++i){
    if(howMany[i] == 6)
        count++;
}
console.log(count);