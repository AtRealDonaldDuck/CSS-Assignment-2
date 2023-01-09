function ValidateAndCalculate(){    
    var userInputs = document.querySelectorAll('#CustomizationOptions > div > *');
    var error = false;

    Array.from(userInputs).forEach(child => {
        if (child.tagName == 'SELECT') {//child[0] refers to the selected option in the select tag, the visibility condition accounts for sub controls.
            if (child.options[child.selectedIndex].value == "placeholder" || child.parentElement.style.display != '') {
                child.style.color = 'red';
                error = true;
            } else{
                child.style.color = 'black';
                error = false;
            }
        }else if (child.tagName == 'INPUT' && child.type == 'text') {
            if (child.value=='') {
                child.style.background = 'red';//setting text colour or border color changes nothing so now you get red everything... i hope youre happy
                error = true;
            }else{
                child.style.background = '';
                error = false;
            }
        }
    });
    if (error) {
        ShowErrorMessage();
    }else{
        /*
        -----------------------------------------------
        ---=========================================---
        -==calculate final price and display a quote==-
        ---=========================================---
        -----------------------------------------------
        */
    }
}
function ShowErrorMessage(){
    alert("Please check your inputs and try again.")
}
function SetVisibility(element, visible){
    element.style.display = visible ? 'block' : '';
}

function ValidateForm(form){
    var error = false;
    var inputs = form.querySelectorAll('.form-control');
    inputs.forEach(input => {
        if(input.value == '' || (input.id='phoneNumber' && input.value.length != 8)){
            input.style.borderColor = 'red';
            error = true;
        }else{
            input.style.borderColor = 'green';
            error = false;
        }
    });
    if (error) {
        alert("ALL inputs are mandatory,please ammend your entries and try again");
    }
}

function restrictToNumbers(element){
    var text = element.value;
    element.value = text.replace(/\D/g,'');
}