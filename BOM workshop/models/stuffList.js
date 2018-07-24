
let gadget = 
 [{
    id: 1,
    name: "Telefon mobil HTC U 11, Dual SIM, 64GB, 4G, Brilliant Black",
    imageUrl: "https://s12emagst.akamaized.net/products/6053/6052836/images/res_151cbf9f491dc8b1555e14bfe5a60fbc_150x150_bpqg.jpg",
    quantity: 5,
    price: 1200
},{
    id: 2,
    name: "Acumulator extern A+, 20000 mAh",
    imageUrl: "https://s12emagst.akamaized.net/products/8023/8022875/images/res_afbd4b05ee5bd92012da2404452eb9ed_450x450_lfqn.jpg",
    quantity: 15,
    price: 300
},{
    id: 3,
    name: "Acumulator extern Smart Charge 1010 10000 mAh cablu micro USB Negru",
    imageUrl: "https://s12emagst.akamaized.net/products/8168/8167260/images/res_70379d488494cd7c8c5d4012bdb680c9_450x450_d5do.jpg",
    quantity: 7,
    price: 150
},{
    id: 4,
    name: "Telefon mobil Meizu M6, Dual SIM, 32GB, 4G, Black",
    imageUrl: "https://s12emagst.akamaized.net/products/14586/14585039/images/res_154d644544cb77ce57d6b6b87aa108e0_450x450_19s3.jpg",
    quantity: 7,
    price: 1000
},{
    id: 5,
    name: "Telefon mobil Nokia 3, Dual SIM, 16GB, Copper White",
    imageUrl: "https://s12emagst.akamaized.net/products/8665/8664917/images/res_fd6e9f225340a180c38950103c489c4e_450x450_u1ak.jpg",
    quantity: 7,
    price: 1685
}]

function GadgetList() {
  this.items = [];
}
window.localStorage.setItem("stuff", JSON.stringify(gadget));

const stuffVal = localStorage.getItem("stuff");
console.log(stuffVal);

const stuffFromLocalStorageStr = localStorage.getItem("stuff");
//we need to transform the string returned by getItem back to Object before accessing object's properties
const stuffFromLocalStorageObj = JSON.parse(stuffFromLocalStorageStr);

window.onload = function() {
var gadgets = new GadgetList();
var showStuffEl = document.getElementById("showStuff");
for(var i = 0; i < stuffFromLocalStorageObj.length; i++) {
      var postEl = document.createElement("div");
      postEl.innerHTML = stuffFromLocalStorageObj[i].name;
//       postEl.setAttribute("href", "http://cursuri-ambaruslevente775940.codeanyapp.com/HW-Games/pages/gameDetails.html?postId=" + gadgets.items[i]._id)
      showStuffEl.appendChild(postEl);
}};








