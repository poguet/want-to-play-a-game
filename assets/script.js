var header = document.querySelector(".mainheader")
var startbtn = document.querySelector("#startbtn")
var countdown = document.querySelector("#countdown")
var quizdiv = document.querySelector(".quiz")
var startquizdiv = document.querySelector("#startquiz")
var initialspage = document.querySelector("#initialspage")
var finalscore = document.querySelector("#finalscore")
var userinitials = document.querySelector("#userinitials")
var initialsdiv = document.querySelector("#initials")
var submitbtn = document.querySelector("#submitinitials")
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