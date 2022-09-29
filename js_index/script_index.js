const primaryNav = document.querySelector(".primary_navigation")
const navToggle = document.querySelector(".mobile_nav_toggle")

navToggle.addEventListener("click", () =>{
    const visibility = primaryNav.getAttribute("data-visible")

    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    }else{
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
})

