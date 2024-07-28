let userScore =0;
let comScore = 0;
let user_score = document.querySelector(".user-score");
let com_score = document.querySelector(".com-score");
let compImg = document.querySelector("#compHand");

let msg = document.querySelector(".msg");
let buttons = document.querySelectorAll(".but");
const ShowWinner = (userWin,UserChoice,compChoice) => {
    if(userWin){
        user_score.innerText = ++userScore;
        msg.innerText = `YOU WINN!!! your ${UserChoice}  has beaten ${compChoice} ` ;
        msg.style.backgroundColor='green';

    }
    else{
        msg.innerText = `YOU LOSE! your ${UserChoice} beaten by ${compChoice}`;
        msg.style.backgroundColor='red';
        com_score.innerText = ++comScore;
        
    }showComp(compChoice);
    
}
const showComp=(compChoice) =>{
    if(compChoice ==="rock"){
        compImg.src="compRock.jpg";
    }
    else if(compChoice == "paper"){
        compImg.src="compPaper.jpg";
    }
    else{
        compImg.src="compScissor.png";
    }
}
buttons.forEach((but)=>{
    but.addEventListener("click",()=>{
        let UserChoice= but.getAttribute("id");
        playGame(UserChoice); 
        
        
    })
})
const randChoice = () =>{
    const options= ["rock","paper","scissors"];
    let val= Math.floor(Math.random()*3);
    return options[val];
}

const playGame = (UserChoice)=>{
    const compChoice=randChoice();
    if(UserChoice === compChoice){
        console.log("draew");
       draw();showComp(UserChoice);
    }
    else{
       let userWin = true;
        if(UserChoice === "rock"){
            userWin =compChoice === "paper"?false:true;
        }
        else if(UserChoice === "paper"){
            userWin = compChoice ==="scissors"?false:true;
        }
        else {
            userWin = compChoice ==="rock"?false:true;
        }
        ShowWinner(userWin,UserChoice,compChoice);
    }
    
}
const draw = () =>{
    msg.innerText = "HE..HE it's DRAWWWW";
    msg.style.backgroundColor='gray';

}