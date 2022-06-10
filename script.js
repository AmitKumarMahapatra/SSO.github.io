function togglePassword(){
    visibilityOn = document.getElementById("visibility--on");
    visibilityOff = document.getElementById("visibility--off");
    passwordField = document.getElementById("password");

    if(passwordField.type === "text"){
        visibilityOff.style.display = "none";
        visibilityOn.style.display = "inline-block";
        passwordField.type = "password"
    }
    else {
        visibilityOn.style.display = "none";
        visibilityOff.style.display = "inline-block";
        passwordField.type = "text";
    }   
}