let menu = document.querySelector(".menubar");
let icon = document.querySelector(".fa-solid");
let icon_div = document.querySelector(".hamburger");
let body = document.querySelector(".body");
function menubar_open() {
    menu.style.display = "block";
    icon.classList.replace("fa-bars", "fa-xmark");
    body.style.overflow="hidden";
    if (icon_div.className.includes("hamburger")) {
        icon_div.classList.replace("hamburger", "back")
        icon_div.setAttribute('onClick',"menubar_close()");
    }
}
function menubar_close() {
    menu.style.display = "none";
    body.style.overflow="auto";
    icon.classList.replace("fa-xmark", "fa-bars");
    if (icon_div.className.includes("back")) {
        icon_div.classList.replace("back","hamburger")
        icon_div.setAttribute('onClick',"menubar_open()");
    }
}
