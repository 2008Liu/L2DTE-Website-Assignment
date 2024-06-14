var counter = 1; //Creates a variable with an initial value of 1.
//Creates a function that is repeatedly called depending on whether a condition is met.
setInterval(function(){
    document.getElementById('radio' + counter).checked = true; //Checks to see if an element with the name "radio" and a number corresponding with the value of "counter" exists. 
    counter++; //Adds 1 to "counter".
    if(counter > 3) { //Condition to see if "counter" is bigger than 3, the number of images in the image slider. =
        counter = 1; //If the previous condition is true, "counter" is reset to 1.
    }
}, 3000); //The code above is repeated every 3000 miliseconds or 3 seconds.