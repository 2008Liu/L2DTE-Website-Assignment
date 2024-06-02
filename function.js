var counter = 1; //Creates a variable with an initial value of 1.
setInterval(function(){ //Creates a function that is repeatedly called depending on whether a condition is met.
    document.getElementById("radio" + counter).checked = true; //Checks to see if an element with the name "radio" and a number corresponding with the value of "counter" exists. 
    counter++; //Adds 1 to "counter".
    if(counter > 3) { //Condition to see if "counter" is bigger than 3, the number of images in the image slider. =
        counter = 1 //If the previous condition is true, "counter" is reset to 1.
    }
}, 3000) //The code above is repeated every 3000 miliseconds or 3 seconds.
function navigation() { //Creates a function called "navigation".
    document.getElementById("myDropdown").classList.toggle("show"); //Switches the "myDropdown" class with "show".
}
window.onclick = function(event) { //This means an event happens when the user clicks something.
    if (!event.target.matches(".nav")) { //Condition to see if the user clikc on somthing with the "nav" class name.
        var dropdowns = document.getElementsByClassName("dropdown-content"); //Creates a variable that has a value of the "dropdown-content" class.
        var i; //Creates a variable with no initial value.
        for (i = 0, i < dropdowns.length; i++;) { //Runs the following code while "i" is smaller than the length of "dropdowns".
            var openDropdown = dropdowns[i]; //Creates a variable with the value of "dropdowns" and "i".
            if (openDropdown.classList.contains("show")){ //Condition to see if "openDropdown" has the "show" class.
                openDropdown.classList.remove("show"); //If the condition above is true, remove "show" from "openDropdown".
            }
        }
    }
}