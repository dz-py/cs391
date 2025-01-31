function checkAge(){
    const age = document.getElementById("age-input").value;
    const ageNumber = Number(age);

    let errorMessage = "";

    if(isNaN(ageNumber)){
        errorMessage = "Age must be a number";
    } else if (ageNumber % 1 != 0){
        errorMessage = "Age must be a whole number";
    } else if (ageNumber < 0){
        errorMessage = "Age must be a positive number";
    } else if (ageNumber < 18){
        errorMessage = "You are under 18";
    } else if (ageNumber > 120){
        errorMessage = "You are over 120";
    }

    if (errorMessage === ""){
        document.getElementById("main-content").style.visibility = "visible";
        document.getElementById("error-message").style.visibility = "hidden";
    } else {
        document.getElementById("error-message").innerHTML = errorMessage;
        document.getElementById("main-content").style.visibility = "hidden";
        document.getElementById("error-message").style.visibility = "visible";
    }


}