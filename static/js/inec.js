let dropdownContentAltbar = document.getElementById("dropdown_content_altbar")
let altbarIcon = document.getElementById("menu_cancel") 
let altbar = document.querySelector(".altbar")
altbar.addEventListener("click",update)
console.log("hi")
function update() {
    if (dropdownContentAltbar.style.display == "flex") {
        dropdownContentAltbar.style.display = "none"
        altbarIcon.className = "fas fa-bars"
    }
    else{
        dropdownContentAltbar.style.display = "flex"
        altbarIcon.className = "fa-solid fa-xmark fa-beat-fade"
    }
}