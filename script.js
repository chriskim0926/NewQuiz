var questions = [
    {
        question:"Try to answer the following code-related questions within the time limit. Keep on mind that incorrect answers will penalize your scoretime by ten seconds!",
        choice1: "Start Quiz",
     }, 
    {
        question:"Commonly used data types DM NOT include:",
        choice1:"1 string",
        choice2:"2 booleans",
        choice3:"3 alerts",
        choice4:"4 numbers",
        correct: 3    },
    {
        question:"The condition in an if/else statement is enclosed within ______.",
        choice1: "Wrong",
        choice2: "Wrong",
        choice3:"Correct",
        choice4:"Wrong",
        correct: 3
    },
    {
        question:"Arrays in JavaScript can be used to store __________.",
        choice1: "Correct",
        choice2: "Wrong",
        choice3:"Wrong",
        choice4:"Wrong",
        correct: 1

    },
    {
        question:"String values must be enclosed within ________ when being assaigned to variables",
        choice1: "Wrong",
        choice2: "Wrong",
        choice3:"Correct",
        choice4:"Wrong",
        correct: 3

    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "Wrong",
        choice2: "Wrong",
        choice3:"Wrong",
        choice4:"Correct",
        correct: 4

    },
    
]

//Timer
var timeEl = document.querySelector("#time");
var secondLeft = 200;

function counter(){
 var timeInterval = setInterval(function(){
    secondLeft--;
    timeEl.textContent = "Time: " + secondLeft;
    if(secondLeft === 0){
        clearInterval(timeInterval)
        alert("Your Score is 0")
    }
 }, 1000);

}
var counterStart = document.getElementById("answer-buttons1")
counterStart.addEventListener("click", counter)




var correctAnswer1 = document.querySelector("#answer-buttons3")
var correctAnswer2 = document.querySelector("#answer-buttons3")
var correctAnswer3 = document.querySelector("#answer-buttons1")
var correctAnswer4 = document.querySelector("#answer-buttons3")
var correctAnswer5 = document.querySelector("#answer-buttons4")
var incorrectAnswer11 = document.querySelector("#answer-buttons1")
var incorrectAnswer12 = document.querySelector("#answer-buttons2")
var incorrectAnswer13 = document.querySelector("#answer-buttons3")
var resultDisplay = document.getElementById("#result")
var ca1= "3 alerts"
var ica11 = "1 string"
var ica12 = "2 booleans"
var ica13 = "4 numbers"

correctAnswer1.addEventListener("click", function(){
    if(ca1 === "3 alerts"){
        ca1 = "3 alerts";
        var resultDisplayEl = document.getElementById("result")
        var resultDisplay = document.createElement("p")
        resultDisplay.id = "result-display"
        resultDisplay.textContent = "Correct!"
        console.log(resultDisplay.textContent)
        resultDisplayEl.append(resultDisplay)
        
    }
})

var nextQuestion = document.getElementById("answer-buttons1")
counterStart.addEventListener("click", counter)

var questionsEl = document.getElementById("quiz-questions");
var answerButtonOne = document.getElementById("answer-buttons1");
var answerButtonTwo = document.getElementById("answer-buttons2");
var answerButtonThree = document.getElementById("answer-buttons3");
var answerButtonFour = document.getElementById("answer-buttons4");



function startQuiz(){
    var starterHeaderEl = document.getElementById("start-quiz-header");
    var starterHeader = document.createElement("h1");
    var instructionEl = document.getElementById("quiz-questions");
    var startBtn = document.getElementById("answer-buttons1");
    var hideBtn2 = document.getElementById("answer-buttons2");
    var hideBtn3 = document.getElementById("answer-buttons3");
    var hideBtn4 = document.getElementById("answer-buttons4");

    instructionEl.textContent = questions[0].question;
    startBtn.textContent = questions[0].choice1;
    hideBtn2.style.display = "none";
    hideBtn3.style.display = "none";
    hideBtn4.style.display = "none";
    starterHeaderEl.textContent = "Coding Quiz Challenge"
    console.log(this.value)

    

}



function loadQuestions(question){
    var targetQuestions = document.getElementById("quiz-questions");
    var starterHeaderEl = document.getElementById("start-quiz-header");
    var answerBtnOne = document.getElementById("answer-buttons1");
    var answerBtnTwo = document.getElementById("answer-buttons2");
    var answerBtnThree = document.getElementById("answer-buttons3");
    var answerBtnFour = document.getElementById("answer-buttons4");
    var showBtn1 = document.getElementById("answer-buttons1");
    var showBtn2 = document.getElementById("answer-buttons2");
    var showBtn3 = document.getElementById("answer-buttons3");
    var showBtn4 = document.getElementById("answer-buttons4");

    


    // var answerLoadElone = document.createElement("button")
    // var answerLoadEltwo = question.choice2;
    // var answerLoadElthree = question.choice3;
    // var answerLoadElfour = question.choice4;
    // var correctLoadEl = question.correct;

    targetQuestions.textContent = questions[1].question
    answerBtnOne.textContent = questions[1].choice1
    answerBtnTwo.textContent = questions[1].choice2
    answerBtnThree.textContent = questions[1].choice3
    answerBtnFour.textContent = questions[1].choice4
    showBtn1.style.display = "block";
    showBtn2.style.display = "block";
    showBtn3.style.display = "block";
    showBtn4.style.display = "block";
    starterHeaderEl.style.display = "none";
    
    

    
}

function loadQuestions2(question){
    var targetQuestions = document.getElementById("quiz-questions");
    var starterHeaderEl = document.getElementById("start-quiz-header");
    var answerBtnOne = document.getElementById("answer-buttons1");
    var answerBtnTwo = document.getElementById("answer-buttons2");
    var answerBtnThree = document.getElementById("answer-buttons3");
    var answerBtnFour = document.getElementById("answer-buttons4");
    var showBtn1 = document.getElementById("answer-buttons1");
    var showBtn2 = document.getElementById("answer-buttons2");
    var showBtn3 = document.getElementById("answer-buttons3");
    var showBtn4 = document.getElementById("answer-buttons4");

    


    // var answerLoadElone = document.createElement("button")
    // var answerLoadEltwo = question.choice2;
    // var answerLoadElthree = question.choice3;
    // var answerLoadElfour = question.choice4;
    // var correctLoadEl = question.correct;

    targetQuestions.textContent = questions[2].question
    answerBtnOne.textContent = questions[2].choice1
    answerBtnTwo.textContent = questions[2].choice2
    answerBtnThree.textContent = questions[2].choice3
    answerBtnFour.textContent = questions[2].choice4
    showBtn1.style.display = "block";
    showBtn2.style.display = "block";
    showBtn3.style.display = "block";
    showBtn4.style.display = "block";
    starterHeaderEl.style.display = "none";
    
       
}
var q2Loader = document.getElementById("answer-buttons1","answer-buttons2","answer-buttons3","answer-buttons4")
var q1Loader = document.getElementById("answer-buttons1","answer-buttons2","answer-buttons3","answer-buttons4")


q1Loader.addEventListener("click", loadQuestions)
q2loader.addEventListener("click",loadQuestions2)



