
let userScore = 0
let computerScore = 0
let result = ""
const divResult = document.querySelector("#results")
const userScoreSpan = document.querySelector("#userScore")
const computerScoreSpan = document.querySelector("#computerScore")
userScoreSpan.textContent = userScore
computerScoreSpan.textContent = computerScore
        
function rockPaperScissors(){
        
function getComputerChoice(){
                

    const options = ["paper","rock","scissors"];
    const random = Math.floor(Math.random()*options.length);
    const computerChoice = options[random];
    return computerChoice
    }

    const computerChoice = getComputerChoice();
    

    
    divResult.textContent = `You chose ${userChoice}  |  Computer chose ${computerChoice}`


    function getResult(userChoice,computerChoice){
        if (userChoice === "paper" && computerChoice === "rock" || userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper"){
            return "You won!!!"
        }
        else if (userChoice === computerChoice){
            return "Its a tie!!!"
        }
        return "Computer won :("

    }


    result = getResult(userChoice,computerChoice)
    divResult.innerHTML += `<br>${result}`
}




let userChoice = ""

let buttons = document.querySelectorAll("button")

function gameLogic(event) {
    userChoice = event.currentTarget.className;
    rockPaperScissors()

    if (result === "You won!!!"){
        userScore = userScore + 1
    }
    else if (result === "Computer won :("){
        computerScore = computerScore + 1
    }

    userScoreSpan.textContent = userScore
    computerScoreSpan.textContent = computerScore
    scoreboard = document.querySelector("#scoreboard")

    if (computerScore === 5){
        divResult.textContent = `I'm sorry my G, computer won the war`
        
    }

    else if(userScore === 5){
        scoreboard.textContent = `You smashed the computer baby!!!`
    }

    if (computerScore === 5 || userScore === 5) {
        buttons.forEach((button) => {
            button.removeEventListener("click", gameLogic);
        });
        
        divResult.innerHTML += `<br> To restart the game reload the page`
    }
    
}

buttons.forEach(
    (button) => {
        button.addEventListener("click", gameLogic)
    }
)
