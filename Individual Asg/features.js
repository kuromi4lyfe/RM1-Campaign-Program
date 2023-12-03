//Submit function called when button 'submit' is click and will notify the user form is submitted

function submitForm(){

   var yearDropdown = document.getElementById("year");
   var currentYear = new Date().getFullYear();

    for(let i = 0; i < 10; i++){
        var option = document.createElement("option");
        option.value = currentYear - i;
        option.text = currentYear - i;
        yearDropdown.add(option);

    }
    //var form = document.getElementById("deduction-form");
    
        alert("Form is submitted successfully!");
  

}