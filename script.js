const openNavMobile = document.getElementById("open-navigation-mobile_button");
const closeNavMobile = document.getElementById("close-navigation-mobile_button");
const navigationMobile = document.querySelector(".navigation-tab");
const navigationMobileLinks = document.querySelectorAll(".navigation-tab li");

function navigationMobileToggle() {
    navigationMobile.classList.toggle("open");
    
    navigationMobileLinks.forEach(navigationMobileLink => {
    navigationMobileLink.classList.toggle("fade");
    })
}

openNavMobile.addEventListener("click", navigationMobileToggle);

closeNavMobile.addEventListener("click", navigationMobileToggle);