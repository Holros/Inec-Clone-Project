{
  let dropdownContentAltbar = document.getElementById(
    "dropdown_content_altbar"
  );
  let altbarIcon = document.getElementById("menu_cancel");
  let altbar = document.querySelector(".altbar");
  altbar.querySelector(".altbar > div").addEventListener("click", update);
  console.log("hi");
  function update() {
    if (dropdownContentAltbar.style.display == "flex") {
      dropdownContentAltbar.style.display = "none"; 
      altbarIcon.className = "fas fa-bars";
    } else {
      dropdownContentAltbar.style.display = "flex";
      altbarIcon.className = "fa-solid fa-xmark fa-beat-fade";
    }
  }
}

{
   let individualDropdown = document.querySelectorAll(".dropdown-two")
   for (let i = 0; i < individualDropdown.length; i++) {
    individualDropdown[i].querySelector(".dropdown-two > a").addEventListener("click",expand)
    individualDropdown[i].querySelector(".dropdown-content-altbar-two").style.display = "none"
    function expand(event) {
      event.preventDefault()
      if(individualDropdown[i].querySelector(".dropdown-content-altbar-two").style.display =="none") {
        individualDropdown[i].querySelector(".dropdown-content-altbar-two").style.display = "flex" 
        individualDropdown[i].querySelector(".dropdown-two i").style.rotate = "180deg"
      }
      else{
        individualDropdown[i].querySelector(".dropdown-content-altbar-two").style.display = "none"
        individualDropdown[i].querySelector(".dropdown-two i").style.rotate = "0deg"
      }
     }
   }
}

