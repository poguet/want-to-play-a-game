var header = document.querySelector(".mainheader")
var startbtn = document.querySelector("#startbtn")
var countdown = document.querySelector("#countdown")
var quizdiv = document.querySelector(".quiz")
var startquizdiv = document.querySelector("#startquiz")
var initialspage = document.querySelector("#initialspage")
var finalscore = document.querySelector("#finalscore")
var userinitials = document.querySelector("#userinitials")
var initialsdiv = document.querySelector("#initials")
var submitbtn = document.querySelector("#submitInitials")
var highscore = document.querySelector("#highscore")
var intro = document.querySelector("#mainintro")
let questionNumber = 0
let score = 0
let quizQuestions = [
    {
        question : "Which marvel hero created J.A.R.V.I.S?",
        choices : ["Bruce banner","Tony stark","Steve rogers"],
        answer : "Tony stark"
    },
    {
        question : "What is the Hulks name when in human form?",
        choices : ["Scott lang","Bruce banner","Clint barton"],
        answer : "Bruce banner"
    },
    {
        question : "What marvel hero is also a neurosurgeon?",
        choices : ["Stephen strange","Nick furry","peter parker"],
        answer : "Stephen strange"
    }
]


var timeLeft = 60;

function quizTime() {

var timerInterval = setInterval(function () {


if(timeLeft > 0) {
    timeLeft--;
    countdown.textContent = "time : " + timeLeft;
}
else{
    timeLeft = 0;
    countdown.textContent = "time : " + timeLeft;
    clearInterval (timerInterval)
};
    }, 1000);
}   

initialspage.style.display = "none";
let answerCorrect = false;
function startquiz() {
if (questionNumber < 3) {
    startquizdiv.innerHTML = "";

    let currentquestion = quizQuestions[questionNumber]
    quizdiv.innerHTML = "";
    let questionEl = document.createElement("div");
    questionEl.innerHTML = currentquestion.question;

    let optiondiv = document.createElement("div");
    let choices = currentquestion.choices;

    for(let i=0; i< choices.length; i++) {
        let choiceBtn = document.createElement("button");
        choiceBtn.innerHTML = choices[i];
        choiceBtn.addEventListener("click", function(event){
            event.preventDefault();
            console.log(event.target);
            let btnText = event.target.innerHTML;
            if(btnText === currentquestion.answer) { 
                answerCorrect = true;
                questionNumber ++
                score = score + 10; 
                startquiz()
            } else {
                answerCorrect = false;
                questionNumber ++
                timeLeft = timeLeft - 15;
                startquiz()
            }
        })
        optiondiv.append(choiceBtn)
    }
    
    if(questionNumber > 0) {
        let feedbackEl = document.createElement("div");
        if(answerCorrect){
            feedbackEl.innerHTML = "Correct"
        } else {
            feedbackEl.innerHTML = "Incorrect"
        }
    
        startquizdiv.append(questionEl, optiondiv, feedbackEl);

    } else {
        startquizdiv.append(questionEl, optiondiv);
    }
    } else {
        console.log()
    timeLeft = 0;
    displayinitialspage ()
        }

}
    



function displayinitialspage() {
    startquizdiv.innerHTML = "";
    initialspage.style.display = "block";
    finalscores.innerHIML = `${score} out of ${quizQuestions.length*10}`
}

submitbtn.addEventListener('click', function(event){
    let initials = userinitials.value;
    let userdata = {
        name : initials,
        score : score
    }
    localStorage.setItem('quiz_score', JSON.stringify(userdata))
})

submitbtn.addEventListener('click', function(event){
    initialspage.innerHTML = ""
    let startOver = document.createElement("button");
    startOver.innerHTML = ("startOver");
})

highscores.addEventListener('click', function(event) {
    console.log("TP")
quizdiv.innerHTML = ""
initialspage.innerHTML -""
let results = localStorage.getitem("quiz_score")
let obj = JSON.parse(results);
console.log(obj)
document.getElementById('highscorePage').innerHTML = obj.name;
})


header.setAttribute("style", "text-align : center;")
header.style.marginTop = "200px";
startbtn.setAttribute("style", "width : 200px; height : 30px;")
intro.setAttribute("style", "font-size : 18px;")

function init() {
    quizTime()
    startquiz()
}

startbtn.addEventListener("click", init); 