let userScore = 0;
let compScore = 0;
let moves = 0;

const choices = document.querySelectorAll(".choice");
const choice = document.getElementsByClassName("choice");
const msg = document.querySelector("#msg");
const result = document.querySelector("#result");
let body = document.getElementsByTagName("body");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice =() =>{
  const options = ["rock", "paper", "scissor"];
  const randInd = Math.floor(Math.random() * 3);
  return options[randInd];
}

const drawGame = () =>{
  msg.innerText = "It's a Draw Play Again!";
}


const showWinner = (userWin, userChoice, compChoice) =>{
  if(userWin){
    msg.innerText = `You Win! Your ${userChoice} beats Computer's ${compChoice}`;
    userScore++;
    userScorePara.innerText = userScore;
    
  }else{
    msg.innerText =  `You Win! Your ${compChoice} beats Computer's ${userChoice}`;
    compScore++;
    compScorePara.innerText = compScore;
  }
}


const playGame= (userChoice) =>{
  const compChoice = genCompChoice();
  console.log("Comp choice :", compChoice);
  

  if(userChoice === compChoice){
    drawGame();
  }else{
    let userWin = true;
    if(userChoice ==="rock"){
      if(compChoice === "paper"){
        userWin = false;
      }else{
        userWin = true;
      }
    }else if (userChoice === "paper") {
      if(compChoice === "scissor"){
        userWin = false;
      }else{
        userWin = true;
      }
    }else if(userChoice==="scissor"){
      if(compChoice=== "rock"){
        userWin = true;
      }else{
        userWin = false;
      }
    }
    showWinner(userWin, userChoice, compChoice); 
  }
}

const gameOver = (moveLeft, userChoice) =>{
  choices.forEach((choice) =>{
    choice.style.display = "none";
    const movemsg = document.querySelector(".move").innerText = "Game Over !";

    if(userScore>compScore){
      msg.innerText = "You Won The game !";
    }else if(userScore<compScore){
      msg.innerText = "You Lost The Game !";
    }else{
      msg.innerText = "Its a draw !";
    }
  })
}

choices.forEach((choice) =>{
  choice.addEventListener("click", () =>{
    console.log("user choice :", choice.id);
    userChoice = choice.id;

    const moveLeft = document.querySelector(".move-left");
    moves++;
    moveLeft.innerText = `Moves Left Only : ${10- moves}`;
    playGame(userChoice);

    if(moves == 10){
      gameOver(moves, moveLeft, userChoice);
    }
  })
})