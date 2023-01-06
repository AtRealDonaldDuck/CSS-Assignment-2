function ValidateAndCalculate(){    
    var userInputs = document.querySelectorAll('#CustomizationOptions > div > *');
    var response = ""//use this in the alert box to show every incorrect element 

    Array.from(userInputs).forEach(child => {
        if (child.tagName == 'SELECT' && child.options[child.selectedIndex].value == "placeholder") {//child[0] refers to the selected option in the select tag
            child.style.color = 'red';
        }else if (child.tagName == 'INPUT' && child.type == 'text' && child.value=="") {
            child.style.background = 'red';//setting text colour or border color changes nothing so now you get red everything... i hope youre happy
        }
    });
}