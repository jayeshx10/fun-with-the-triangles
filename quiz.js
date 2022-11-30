const form = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector(".output-div");

const answers = ["One right angle", "90°", "Equilateral triangle", "False", "Scalene", "None of the above", "40°","Right angled triangle", "One right   angle", "a+b+c"]; 

function clickHandler(){
    let score = 0;
    let i = 0;

    var formReponses = new FormData(form);
    for(let value of formReponses.values()){
        if(value == answers[i]){
            score++;
        }
        i++;
    }
    outputDiv.style.display = "block";
    outputDiv.innerHTML = "Your quiz score is: " + score;
}

submitBtn.addEventListener("click", clickHandler);