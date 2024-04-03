let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector(span);
let itemInfo = document.querySelector(".item-info");

let menuItem = document.querySelector(".menu-item");

function showModal(){
    overlay.classList.add("showOverlay");
    itemInfo.classList.add("showItemInfo");
}

menuItem.addEventListener("click", showModal);

const pathName = window.location.pathname;
console.log(pathName);

