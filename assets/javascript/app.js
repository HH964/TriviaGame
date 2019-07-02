var correct = 0;
    var incorrect = 0;
        var time = 5;
var intervalId;
$('#display').hide();
$(document).on("click", "#startButton", function(event){
    start();
});

var questions = [{
    question: "What was the first car wrecked in the movie?",
    answerList: ["Koenigsegg Agera R", "Lamborghini Huracan", "McLaren 720S", "Nissan GTR"],
    correctAnswer: "Koenigsegg Agera R"
},
{
    question: "What was the selling price of the one off mustang for the film?",
    answerList: ["50K", "90K", "500K", "300k"],
    correctAnswer: "300k"
},
{
    question: "What was the actual HP range of the Mustang staring in the film?",
    answerList: ["400 - 450 HP", "500 - 600 HP", "650 - 750 HP", "800 - 900HP"],
    correctAnswer: "500 - 600 HP"
},
{
    question: "Which car in the film only has 20 real life examples?",
    answerList: ["Lamborghini Sesto Elemento", "McLaren P1", "Bugatti Veyron", "Koenigsegg Agera R"],
    correctAnswer: "Lamborghini Sesto Elemento"
}];

function start(){
    for (var i = 0; i < questions.length; i++){
        $("#quizList").append("<br><br>" + questions[i].question + "<br>");
        for (var j = 0; j < questions[i].answerList.length; j++){
        $("#quizList").append( " " + '<button class="questionButton" data-question="' + i + '">' + questions[i].answerList[j] + '</button>' + " ");
        }       
}

    intervalId = setInterval(countdown, 1000);
        $("#startButton").hide();
        $('#display').show();
    };


function countdown() {
    if (time !== 0){
         time--;
    $('#display').html(time);
    }

    else if (time === 0) {
        console.log("game over");
        timeISUP();
        clearInterval(intervalId);
        $("#quizList").empty(" ");
        $("#quizList").append("<h2>" + "Your Correct Answers: " + correct +"</h2>");
        $("#quizList").append("<h2>" + "Your Incorrect Answers: " + incorrect +"</h2>");
        $('#display').hide();
    }
    

}

// console.log(countdown)
console.log($("#quizList"))

// console.log(time)
// console.log($('#display'))

// var button= document.querySelector("button"); // Accessing The Button // 
// button.addEventListener("click", check); // Adding event to call function when clicked // 

// function check(){ 
// console.log("clicked");
// }; 

$(document).on("click", ".questionButton", function(){
    var curQues = $(this).attr("data-question");
    $(this).prop("disabled",true);
    
    // console.log(this);
     if(questions[curQues].correctAnswer === $(this).text()){
        correct++;
    }
    else{
        incorrect++;
    }
    console.log("correct answer count: " + correct)
    console.log("incorrect answer count: " + incorrect)
    console.log("-----------------------------------------------")
})

function timeISUP (){
    $('#quizList').append("<h2>" + "correct answers:" + correct + incorrect + "</h2>");
    //   alert(correct);  
    }