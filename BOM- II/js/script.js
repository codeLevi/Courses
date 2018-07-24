const setTimeoutId = setTimeout(() => {
  console.log("Hey from setTimeout!");
  clearInterval(setIntervalId);
}, 6000);

console.log(setTimeoutId)
//teardown  
  let sum = 0;
const setIntervalId = setInterval(() => {
sum += 1;//sum = sum + 1
  console.log(sum);
}, 1000);

window.addEventListener("unload", () => {
  //teardown/cleanup
  //this statement is used for debugging, the code will automatically stop there if browser console is opened
  debugger;
  clearTimeout(setTimeoutId);
});

//Play with localStorage
//set a string in local storage
window.localStorage.setItem("key1", "Ding Dong");
const user = {
  name: "John",
  lastName: "Doe",
  age: 34
}
//we need to transform the object to a readable string before saving it in local storage otherwise is will save [object object]
localStorage.setItem("userData", JSON.stringify(user));

//get a string from local storage
const key1Val = localStorage.getItem("key1");
console.log(key1Val);

const userDataFromLocalStorageStr = localStorage.getItem("userData");
//we need to transform the string returned by getItem back to Object before accessing object's properties
const userDataFromLocalStorageObj = JSON.parse(userDataFromLocalStorageStr);

// update user object
userDataFromLocalStorageObj.age = 22;
//in order to update  an entry from localStorage you have to use the same "key" when calling setItem so the value will be overwritten
 localStorage.setItem("userData", JSON.stringify(userDataFromLocalStorageObj));

console.log(userDataFromLocalStorageObj.age);

// delete item from localStorage
localStorage.removeItem("key1");





















