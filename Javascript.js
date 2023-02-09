"use strict";

// Hover for logo
const logoHover = document.querySelector(".logo");

logoHover.addEventListener("mouseover", () => { logoHover.classList.add("navBarHover")});
logoHover.addEventListener("mouseleave", () => { logoHover.classList.remove("navBarHover")});


// Hovers for li in Navigation:
document.querySelectorAll(".navHover").forEach(item => {
    item.addEventListener("mouseover", () => { 
        item.classList = "navBarHover";
    } )
})

document.querySelectorAll(".navHover").forEach(item => {
    item.addEventListener("mouseleave", () => { 
        item.classList = "nav";
    } )
})

// Hovers for footer:
document.querySelectorAll(".footerHover").forEach(item => {
    item.addEventListener("mouseover", () => { 
        item.classList = "footHoverColor";
    } )
})

document.querySelectorAll(".footerHover").forEach(item => {
    item.addEventListener("mouseleave", () => { 
        item.classList = "footerDefault";
    } )
})