// //not hoisted
// class Post{
// 	constructor(){
// 		this.id=null;
// 		this.title="";
// 		this.body="";
// 		this.userId=null;
// 	}
// 	//class/prototype methods
// 	fetchData(id){
// 			//var that=this;
// 			return $.ajax ( 'https://jsonplaceholder.typicode.com/posts/' + id, {
// 			method:'GET',
// 			success: (data) => {
//         console.log(this);
// 				this.id=data.id;
// 				this.title=data.title;
// 				this.body=data.body;
// 				this.userId=data.userId;
// 			},
// 			error : () => {
// 				alert('Something went wrong with post details!');
// 			}
// 		});
// 	}
//   get getTitle() {
//     return this.title.toUpperCase();
//   }
//   set bodySetter(bodyText) {
//     if (bodyText) {
//           this.body = bodyText;  
//     } else {
//       this.body = "Lorem ipsum";
//     }
//   }
//   static formatText(textToFormat) {
//     return textToFormat + "...";
//   }
// }

// const currentPost=new Post();
// currentPost.title="Some string";
// currentPost.body="hgfd";
// currentPost.fetchData(4).then((response)=>{
// 	console.log(response);
// });
// //call getters
// console.log(currentPost.getTitle);
// //call setters
// currentPost.bodySetter = "Summer body";
// console.log("Setter with text", currentPost.body);

// currentPost.bodySetter = "";
// console.log("Setter without text", currentPost.body);

// console.log(currentPost.title);
// console.log(currentPost);

// //call static methods
// // const formattedText = Post.formatText(currentPost.body);
// // currentPost.body = formattedText;
// // console.log(formattedText);


// //class inheritance
// class Animal {
//   construtor() {
//     this.name = "";
//     this.age = 0;
//     this.height = 0;
//   }
//   speak() {
//     alert("Speaking like an animal");
//   }
//   eat() {
//     console.log("Nom NOm nom!");
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     //needs to be invoked before using this in subclasses
//     //it calls constructor fn from parent classs
//     super();
//     //class specific attributes
//     this.breed = "";
//   }
  
//   playFetch() {
//     console.log("im happy to play fetch");
//   }
// }
// const a = new Animal();
// console.log(a);

// const d = new Dog();
// console.log(d);
// //eat method is being inboked from parent class
// d.eat();
// //name attribute is being used from parent class
// d.name;
// //breed attribute is being used from subclass
// d.breed;
// //Subclass specigic methods
// d.playFetch;

// //gfdas

class App {
  constructor() {
    this.id = 0;
    this.name = "";
    this.price = 0;
  }
  start() {
    console.log("Game started");
  }
  stop() {
    console.log("Game over");
  }
}

class Game extends App {
  constructor() {
     super();
    this.score = 0;
    this.winners = [];
  }
  play() {
    console.log("Just do it");
  }
}

const p1 = new App();
const p2 = new Game();
p1.id = 1;
p2.id = 2;
p1.name = "hgfds";
p2.name = "tfred";
console.log(p1);
console.log(p2);




















