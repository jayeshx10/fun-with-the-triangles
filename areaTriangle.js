const valueInputs = document.querySelectorAll(".value-inputs");
const calcBtn = document.querySelector("#calc-btn");
const output = document.querySelector(".output-div");



function calculateArea(){
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
             //calculate area
            const area = 1/2*(valueInputs[0].value*valueInputs[1].value);
                        
            //display the area
            output.style.display = "block";
            output.innerHTML = "Area of the triangle: " + area.toFixed(0) + " units";

            //clear the input values
            valueInputs[0].value = null;
            valueInputs[1].value = null;
       }
    }
}

calcBtn.addEventListener('click', calculateArea);