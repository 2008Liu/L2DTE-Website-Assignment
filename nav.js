const icon = document.querySelector(".icon"); //Creates a constant with all the website elements with the ".icon" class.
const navMenu = document.querySelector(".nav-menu"); //Creates a constant with all the website elements with the ".nav-menu" class.
//Creates a function to occur when the icon constant is clicked on the website.
icon.addEventListener("click", () => {
    icon.classList.toggle("active"); //Toggles the icon constant so it also has the variable of the accompanying "active" class.
    navMenu.classList.toggle("active"); //Toggles the navMenu constant so it also has the variable of the accompanying "active" class.
})
//Creates a function that acts on all website elements with the ".nav-link" class.
document.querySelectorAll(".nav-link").forEach(
    n => n.addEventListener("click", () => { //Activates the function when an element it is connected to is clicked.
        icon.classList.remove("active"); //Removes the "active" class from the icon constant.
        navMenu.classList.remove("active"); //Removes the "active" class from the navMenu constant.
    }))