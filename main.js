//App variables
let userScore = 0;
let compScore = 0;

//DOM retrieved elements
const user_score = document.getElementById("user-score");
const comp_score = document.getElementById("comp-score");
const score_board = document.querySelector(".score-board");
const result = document.querySelector(".result p");
const rock_element = document.getElementById("rock");
const paper_element = document.getElementById("paper");
const scissors_element = document.getElementById("scissors");


//Game functions - Win/Lose/Draw

const win = () => {
    userScore++;
    user_score.innerText = userScore;
}

const lose = () => {
    compScore++
    comp_score.innerText = compScore;
}

const draw = () => {
    console.log("A draw!");
}


// Function to Get Computer's Choice
const getCompChoices = () => {
    const choices = ["Rock","Paper","Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

// the game's main function

const game = (userChoice) => {
    const computerChoice = getCompChoices();
    console.log(`User's choice: ${userChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "ScissorsPaper":
        case "PaperRock":
            result.innerText = `${userChoice} vs ${computerChoice} : You win !`;
            win();
            break;
        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            result.innerText = `${userChoice} vs ${computerChoice} : You lose !`;
            lose();
            break;

        default:
            result.innerText = `${userChoice} vs ${computerChoice} : A draw !`;
            draw();
            break;
    } 
}

const main = () => {
    rock_element.addEventListener("click", () => {
        game("Rock");
    });
    
    paper_element.addEventListener("click", () => {
        game("Paper");
    });
    
    scissors_element.addEventListener("click", () => {
        game("Scissors");
    });
}

main();
