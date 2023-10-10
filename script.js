// Print the title of the game
console.log("You are playing rock paper scissors against the machine. Have fun!")

function game(){
    let userScore = 0
    let computerScore = 0
    
    while (true){
        let result = ""
        let userChoice = ""

        function rockPaperScissors(){
        

        // Make a function called getComputerChoice that finds the computer choice:
        function getComputerChoice(){
            

        // Gets one random value from "Rock""Paper""Scissors" and stores it in a variable called computerChoice.
            const options = ["paper","rock","scissors"];
            const random = Math.floor(Math.random()*options.length);
            const computerChoice = options[random];
            return computerChoice
        }

        const computerChoice = getComputerChoice();
        // Ask the user to introduce rock, paper or scissors, regardless of the upper or lowercases.

        function getUserChoice(){
            let choice = prompt("Choose 'Rock', 'Paper' or'Scissors' ")
            //Handle other responses
            while (true){
            if(choice === "" || choice === null){
                alert("Process canceled")
                return choice

            }
            
            else if (choice.trim().toLowerCase() === "rock" || choice.trim().toLowerCase() === "paper" || choice.trim().toLowerCase() === "scissors" ){
                return choice.trim().toLowerCase()
            }

            else{alert("Your choice doesn't exist, make sure you choose one from the list")}
            choice = prompt("Choose 'Rock', 'Paper' or'Scissors' ").toLowerCase()
            }
        }
        // Store the user answer in a variable called userChoice
        userChoice = getUserChoice()

        //Cancel the process
        if (userChoice === "" || userChoice === null){
            return;
        }

        // print `Your choice was ${userChoice}`
        // print `Computer choice was ${computerChoice}`

        console.log(`You chose ${userChoice}`)
        console.log(`Computer chose ${computerChoice}`)

        // Create a function called getResult that gets the winner:
        function getResult(userChoice,computerChoice){
            // if userChoice equals paper and computerChoice equals rock OR  user === rock AND computer === scissors OR user === scissors and computer === paper: return "user wins"
            if (userChoice === "paper" && computerChoice === "rock" || userChoice === "rock" && computerChoice === "scissors" || userChoice === "scissors" && computerChoice === "paper"){
                return "You won!!!"
            }
            // else if userChoice === computerChoice: return "You are in a tie!"
            else if (userChoice === computerChoice){
                return "Its a tie!!!"
            }
            // return "computer wins"
            return "Computer won :("

        }
        result = getResult(userChoice,computerChoice)

        // print(getResult)
        console.log(result)
        }

        rockPaperScissors()

        //Cancel process
        if (userChoice === "" || userChoice === null){
            return;
        }

        if (result === "You won!!!"){
            userScore = userScore + 1
        }
        else if (result === "Computer won :("){
            computerScore = computerScore + 1
        }

        console.log(`Score: YOU => ${userScore}   COMPUTER => ${computerScore}`)
        if (computerScore === 5){
            break;
        }
        else if(userScore === 5){
            break;
        }
    } 

    

    if (computerScore > userScore){
        console.log("Computer won the game :(")
    }
    else {
        console.log("You won the game!!!")
    }

}
game()
