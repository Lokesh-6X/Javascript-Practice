var randomNumber = Math.floor((Math.random()*10)) + 1;

var score = 10;

function checkNumber(){
    var inputNumber = document.getElementById("inputNumber");
    var resultText = document.getElementById("resultPrint");
    var scoreText = document.getElementById("score");
    var boxNumber = Number(inputNumber.value);
    if(score>1)
        if(boxNumber == randomNumber){
            resultText.textContent = "You guessed the Correct Number";
            scoreText.textContent = `Your Score is: ${score} !`;
            return;
        }else{
            resultText.textContent = `You guessed the wrong number`;
            score--;
            scoreText.textContent = `Your Score is: ${score} !`;
    }else{
        scoreText.textContent = `Total number of attempts reached!`;
        return;
    }
}