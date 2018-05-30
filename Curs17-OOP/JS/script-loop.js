
var userData = [{
  name: "John",
  age: 34,
  height: 1.76,
  weight: 80
},{
  name: "Marty",
  age: 22,
  height: 1.65,
  weight: 90
},{
  name: "Anne",
  age: 44,
  height: 1.73,
  weight: 45
},{
  name: "Kevin",
  age: 33,
  height: 1.80,
  weight: 77
}];

function User(){
  this.name = "";
  this.age = 0;
  this.height = 0;
  this.weight = 0;
}

User.prototype.calculateBMI = function(){
  return thi.height / this.weight;
}

for(var i = 0; i< userData.length; i++) {
  var currentUser = userData[i];
  var u = new User();
  u.name = currrentUser.name;
  u.age = currentUser.age;
  u.height = currentUser.height;
  u.weight = currentUser.weight;
  
  var rezBmi = u.calculateBMI();
  console.log(rezBmi);
}


























