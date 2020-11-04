var QuestionArry = [
    //set0
    {
        question: "Today the most popular social networking site is?",
        answer: "facebook",
        options: [
            "facebook",
            "instagram",
            "linkdin",
            "github",
        ]

    },

    //set1
    {
        question: "The average of first 50 natural numbers is?",
        answer: "25.5",
        options: [
            "25.30",
            "25.5",
            "25.00",
            "12.25",
        ]

    },

    // set2
    {
        question: "The simplest form of 1.5 : 2.5 is?",
        answer: "3 : 5",
        options: [
            "6 : 10",
            "15 : 25",
            "0.75 : 1.25",
            "3 : 5",
        ]

    },

    //set3
    {
        question: "Full form of RAM is?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "none of the above",
        ]

    },

];

function validate(){
    sessionStorage.clear();
    var userName = document.getElementById("userName");
    if(userName.value == "" || userName.value == " "){
        alert ("User name required!");
    }
    else{
        sessionStorage.setItem("name" , userName.value);
        startQuiz();
    }
}

function startQuiz(){
    window.location.href = "index.html";
}


function questionElement(e) {
    //show q
    var questionElement = document.getElementById("questionElement");
    questionElement.innerHTML = QuestionArry[e].question;


    //show option
    var optionElement = document.getElementsByClassName("optionElement");
    for (var i = 0; i < optionElement.length; i++) {
        optionElement[i].innerHTML = QuestionArry[e].options[i]
    }
}


var questionCount = 0;
var score = 0;

function nextQuestion() {
    // var nextbtn = document.getElementById("nextbtn")
    validate(questionCount);
    questionCount++;
    if(questionCount <= QuestionArry.length-1){
        questionElement(questionCount);
    }
    removeFucntion();
    setresult();

}

function activeFunction(e) {
    removeFucntion()
    e.classList.add("active")
    // console.log(e.innerHTML)
}


function removeFucntion() {
    var active = document.getElementsByClassName("active");
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active")
    }
}


function validate(x) {
    var active = document.getElementsByClassName("active")
    if (active[0].innerHTML == QuestionArry[x].answer) {
        score += 10;
        // console.log(score)
    }
    // alert ("your score is  " + score + " / 40")
}


function setresult(){
    if(questionCount == QuestionArry.length){
        window.location.href = "result.html";
    } 
    var result = document.getElementById("result");
    sessionStorage.setItem("userscore" , score);
}

function renderResult(){
    var cs =    sessionStorage.getItem("userscore");
    result.innerHTML = "Your scoure  is " + cs + " out of 40";
}



function reTry(){
    window.location.href = "main.html";
}




