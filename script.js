let uChoice = document.querySelectorAll(".choice");
let result = document.querySelector(".result");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let uScore = 0;
let cScore = 0;
 
const cChoice = () => {
let options = ["rock", "paper", "scissor"];
let idx = Math.floor(Math.random()*3);
return options[idx];
};


uChoice.forEach((choice)=>{
result.innerText = `Play you move`;
userScore.innerText = uScore;
compScore.innerText = cScore;
  choice.addEventListener("click", () => {
  let uc = choice.getAttribute("id");
  let cc = cChoice();
  console.log("user=",uc, "\ncomp=",cc);

  if(uc==cc){
    result.innerText = `Draw. Play Again`;
    result.style.backgroundColor =  "#081b31";
  }else if(uc=="rock"&&cc=="paper"){
    result.innerText=`You Lost. Play Again`;
    cScore++;
    compScore.innerText = cScore;
    result.style.backgroundColor ="red";
  }else if(uc=="paper"&&cc=="scissor"){
    result.innerText=`You Lost. Play Again`;
    cScore++;
    compScore.innerText = cScore;
    result.style.backgroundColor = "red";
  }else if(uc=="scissor"&&cc=="rock"){
    result.innerText=`You Lost. Play Again`;
    cScore++;
    compScore.innerText = cScore;
    result.style.backgroundColor = "red";
  }else if(uc=="paper"&&cc=="rock"){
    result.innerText=`You Won. Play Again`;
    uScore++;
    userScore.innerText = uScore;
    result.style.backgroundColor = "green";
  }else if(uc=="scissor"&&cc=="paper"){
    result.innerText=`You Won. Play Again`;
    uScore++;
    userScore.innerText = uScore;
    result.style.backgroundColor = "green";
  }else if(uc=="rock"&&cc=="scissor"){
    result.innerText=`You Won. Play Again`;
    uScore++;
    userScore.innerText = uScore;
    result.style.backgroundColor = "green";
  }
 
});
});
