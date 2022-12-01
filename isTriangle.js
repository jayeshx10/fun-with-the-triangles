const angles = document.querySelectorAll(".input-fields");
const checkBtn = document.querySelector("#tri-btn");
var output = document.querySelector(".output-div");

function calculateSum(ang1, ang2, ang3){
    return ang1 + ang2 + ang3;
}

function clearInputs(){
    for(let angle of angles){
        angle.value = "";
}
}

function displayMsg(color, msg){
    output.style.display = "block";
    output.style.color = color;
    output.innerHTML = msg;
}

function isTriangle(){
    if(angles[0].value == "" || angles[1].value == "" ||angles[2].value == ""){
        displayMsg("red", "Please enter all the fields");
    }
    else if(Number(angles[0].value) === 0 || Number(angles[1].value) === 0 || Number(angles[2].value) === 0){
        displayMsg("red", "C'mon macha, angles cannot be ZERO na !");
        clearInputs();
    }
    else{
        if(Number(angles[0].value) < 0 || Number(angles[1].value) < 0 || Number(angles[2].value) < 0){
            displayMsg("red", "C'mon macha, angles cannot be NEGATIVE na !");
            clearInputs();
        }
        else{
            var sum = calculateSum(Number(angles[0].value),  Number(angles[1].value), Number(angles[2].value));

            if(sum === 180){
                displayMsg("black", "Yes, the angles are forming a triangle !!!");
                clearInputs();
            }
            else{
                displayMsg("black", "Nope, the angles are NOT forming a triangle !!!");
                clearInputs();
            }
        }
    }
}

checkBtn.addEventListener('click', isTriangle);