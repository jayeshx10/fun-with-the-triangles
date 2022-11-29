const angles = document.querySelectorAll(".angle-inputs");
const checkBtn = document.querySelector("#tri-btn");
var output = document.querySelector(".output-div");

function calculateSum(ang1, ang2, ang3){
    return ang1 + ang2 + ang3;
}

function isTriangle(){
    if(angles[0].value == "" || angles[1].value == "" ||angles[2].value == ""){
        output.style.display = "block";
        output.style.color = "red";
        output.innerHTML = "Please enter all the fields";
    }
    else if(Number(angles[0].value) === 0 || Number(angles[1].value) === 0 || Number(angles[2].value) === 0){
        output.style.display = "block";
        output.style.color = "red";
        output.innerHTML = "C'mon macha, angles cannot be ZERO na !";
    }
    else{
        if(Number(angles[0].value) < 0 || Number(angles[1].value) < 0 || Number(angles[2].value) < 0){
            output.style.display = "block";
            output.style.color = "red";
            output.innerHTML = "C'mon macha, angles cannot be NEGATIVE na !";
        }
        else{
            var sum = calculateSum(Number(angles[0].value),  Number(angles[1].value), Number(angles[2].value));

            if(sum === 180){
                output.style.display = "block";
                output.innerHTML = "Yes, the angles are forming a triangle !!!";
            }
            else{
                output.style.display = "block";
                output.innerHTML = "Nope, the angles are NOT forming a triangle !!!";
            }
        }
    }
}

checkBtn.addEventListener('click', isTriangle);