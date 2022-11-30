const valueInputs = document.querySelectorAll(".value-inputs");
const calcBtn = document.querySelector("#calc-btn");
const output = document.querySelector(".output-div");

function calculateHypo(){
    if(valueInputs[0].value == "" || valueInputs[1].value == ""){
        output.style.display = "block";
        output.style.color = "red";
        output.innerHTML = "PLEASE ENTER BOTH THE FIELDS !!";
    }
    else if(valueInputs[0].value == 0 || valueInputs[1].value == 0){
        output.style.display = "block";
        output.style.color = "red";
        output.innerHTML = "Sides of the triangle cannot be ZERO !!";
    }
    else{
       if(valueInputs[0].value < 0 || valueInputs[1].value < 0){
        output.style.display = "block";
        output.style.color = "red";
        output.innerHTML = "Sides of the triangle cannot be NEGATIVE !!";
       }
       else{
             //calculate hypo
            const hypo = Math.sqrt(Math.pow(valueInputs[0].value, 2) + Math.pow(valueInputs[1].value, 2));
                        
            //display the hypo
            output.style.display = "block";
            output.innerHTML = "The length of the hypotenuse is: " + hypo.toFixed(3);

            //clear the input values
            valueInputs[0].value = null;
            valueInputs[1].value = null;
       }
    }
}

calcBtn.addEventListener('click', calculateHypo);


