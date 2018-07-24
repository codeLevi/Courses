var poss = ['Rock', 'Paper', 'Scissors'];
// var botRandom = poss[Math.floor(poss.length * Math.random())];
var botRandom = Math.random();
if (botRandom <0.34){
    botRandom = "Rock";
}else if(botRandom <=0.67){
    botRandom = "Paper";
}
else{
    botRandom = "Scissors";
}
var userRandom = poss[Math.floor(poss.length * Math.random())];
console.log("Bot's choice:", botRandom);
console.log("User's choice:", userRandom);


var compare = function(botRandom, userRandom){
  if(botRandom === userRandom) {
    console.log("Draw");
  }
  //rock > scissor
  if(botRandom === 'Rock'){
    if(userRandom === 'Scissors'){
      console.log("Bot Wins!");
      }
    
  }
  //paper > rock
  if(botRandom === 'Paper'){
    if(userRandom === 'Rock'){
      console.log("Bot Wins!");
      }
    
  } 
  //scissor > rock
  if(botRandom === 'Scissors'){
    if(userRandom === 'Paper'){
      console.log("Bot Wins!");
      }
  }

  //rock > scissor
  if(userRandom === 'Rock'){
    if(botRandom === 'Scissors'){
      console.log("User Wins!");
      }
    
  }
  //paper > rock
  if(userRandom === 'Paper'){
    if(botRandom === 'Rock'){
      console.log("User Wins!");
      }
    
  } 
  //scissor > rock
  if(userRandom === 'Scissors'){
    if(botRandom === 'Paper'){
      console.log("User Wins!");
      }
  }


};
compare(botRandom, userRandom);

