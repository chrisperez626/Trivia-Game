//variables preset

var seconds = 60;
var correctAnswers = 0;
var incorrectAnswers = 0;
var intervalId;

//function to have the clock rundown
function timeGo(){
    clearInterval(intervalId);
    intervalId = setInterval(timeDecrease, 1000);
}

//function to have seconds decrease
function timeDecrease(){
    minutes = 0;
    
    seconds--;

    $("#Timer").html("<h1>" + "Time left: " + seconds + "</h1>")

    if(seconds === 0){
        timeUp();

        seconds = 60;
    }

}

//function for when timer runs up to stop game
//shows user how many correct and incorrect answers
function timeUp(){
    clearInterval(intervalId);
    alert("Times Up!!");
    alert("Correct: " + correctAnswers);
    alert("Incorrect: " + incorrectAnswers);
}

//Runs clock
timeGo();

//adds correct answer to score
$("body").on("click",".correctAnswer",function(){
    correctAnswers++;
})

//adds incorrect answer to score
$("body").on("click",".incorrect",function(){
    incorrectAnswers++;
})

//if user finishes early this allows them to submit quiz
//stops clock and shows results
$("body").on("click","button",function(){
    timeUp();
})

