

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

        let userChoice = ""
        let buttons = document.querySelectorAll("button")
        buttons.forEach(
            (button) => {
                button.addEventListener("click", 
                () => {
                    userChoice = button.className
                    rockPaperScissors()
            })
            })

        
       
        
