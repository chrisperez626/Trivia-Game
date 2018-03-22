var minutes = 1;
var seconds = 60;

var intervalId;

function timeGo(){
    clearInterval(intervalId);
    intervalId = setInterval(timeDecrease, 1000);
}

function testScorer(){
    if(d){

    }
}


function timeDecrease(){
    minutes = 0;
    
    seconds--;

    $("#Timer").html("<h1>" + "Time left: " + seconds + "</h1>")

    if(seconds === 0){
        timeUp();

        minutes = 1;

        seconds = 60;
    }

}

function timeUp(){
    clearInterval(intervalId);
}

$("#submitButton").click(function(){
    console.log("nigger")
})