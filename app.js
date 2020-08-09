window.onload = function(){
    sHow(0);
}
var questions = [{
    id: 1,
    question: "Urdu was declared national language of Pakistan in:",
    answer: "April 1954",
    options: [
        "April 1950",
        "April 1955",
        "April 1954",
        "April 1952"
    ]


},
{
    id: 2,
    question: "Who composed the verses of Pakistan national Anthem?",
    answer: "Hafeez Jallandri",
    options: [
        "Nasir Kazmi",
        "Hafeez Jallandri",
        "Allama Iqbal",
        "Faiz Ahmed Faiz"
    ]

},
{
    id: 3,
    question: "In terms of temperature the hottest place in Pakistan is",
    answer: "Jacobabad",
    options: [
        "Jacobabad",
        "Multan",
        "Sibbi",
        "Karachi"
    ]

},
{
    id: 4,
    question: "In terms of temperature the coolest place in Pakistan is:",
    answer: " Skardu",
    options: [
        " Skardu",
        "Quetta",
        "Muree",
        "Drosh"
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