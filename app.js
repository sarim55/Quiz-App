window.onload = function(){
    sHow(0);
}
var questions = [{
    id: 1,
    question: "Who is the inventor of JavaScript?",
    answer: "Brendan Eich",
    options: [
        "Dennis Ritchie",
        "Brendan Eich",
        "James Gosling",
        "Guido van Rossum"
    ]


},
{
    id: 2,
    question: "Who is the inventor of Apple?",
    answer: "Steve Jobs",
    options: [
        "Dennis Ritchie",
        "Steve Jobs",
        "James Gosling",
        "Guido van Rossum"
    ]

},
{
    id: 3,
    question: "Who is the founder of Google?",
    answer: "Larry Page",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Guido van Rossum"
    ]

},
{
    id: 4,
    question: "Who is the inventer of Samsung?",
    answer: "Lee Byung-chul",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Lee Byung-chul"
    ]

}

]
var point = 0;
var quest_count = 0;
function next(){
 
    console.log(quest_count)
        let user_answer = document.querySelector('li.option.active').innerHTML;
        // user answer
        console.log("User ANswer "+user_answer )
        console.log("Answer "+questions[quest_count].answer)
        if (user_answer == questions[quest_count].answer) {
            point += 10;}
                quest_count++
    if(quest_count < questions.length){
    sHow(quest_count)
    }
    else{
        document.getElementById("submit").classList.remove("butnd")
        document.getElementById("butn").classList.add("butnd")
        
    }
    console.log("Points: "+point)
}

function Active() {console.log("Hello")
    let option = document.querySelectorAll("li.option")
    for (let i = 0; i < option.length; i++) {
        
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add('active')

        }

    }
}

function sHow(a){
    var quest= document.getElementById("question");
    quest.innerHTML = `<h3>${questions[a].question}</h3>
    <ul class="list">
    <li class="option" >${questions[a].options[0]}</li>
    <li class="option">${questions[a].options[1]}</li>
    <li class="option">${questions[a].options[2]}</li>
    <li class="option">${questions[a].options[3]}</li>
    </ul>`
    Active()
}

function submit(){
    var submit = document.getElementById("submit");
    alert("Total Points are: "+point)
}