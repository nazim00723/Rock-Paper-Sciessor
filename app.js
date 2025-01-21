let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userpoints = document.querySelector("#user-score");
const comppoints = document.querySelector("#comp-score");

const gentCompChoice = ()=>{
    const options =["rock","paper","sciessor"];
    const randinx = Math.floor(Math.random()*3);
    return options[randinx];
}

const drawGame = () =>{
    msg.innerText = "GAME WAS DRAWN!!";
    msg.style.backgroundColor= "black";
}

const showwinner = (userwin, userChoice, compChoice)=> {
    if (userwin){
        userScore++;
        userpoints.innerText = userScore;
        msg.innerText = `YOU WIN!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    } else {
        compScore++;
        comppoints.innerText = compScore;
        msg.innerText = `YOU LOSE!! ${userChoice} beats Your ${compChoice}`;
        msg.style.backgroundColor= "red";
    }
}

const playGame = (userChoice) =>{
    console.log("userchoice =", userChoice);
    //Generate computer chocie
    const compChoice = gentCompChoice();
    console.log("compChoice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userwin = true;
        if(userChoice === "rock"){
            //scissor,paper
           userwin = compChoice === "paper"? false : true;
        }else if (userChoice == "paper"){
            //rock, scissor
            userwin = compChoice === "scissors"? false : true;
        }else{
           userwin = compChoice === "rock"? false : true;
        }
        showwinner(userwin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});