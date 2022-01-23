"use strict";
let progress = document.querySelector('.progress');
let burgerButton = document.getElementById("burger_btn");
let burgerMenu = document.getElementById("burger_menu");
let body = document.body;

function toggleOpenClass(){
    burgerMenu.classList.toggle("open");
    burgerButton.classList.toggle("open");
    if(burgerMenu.classList.contains("open")){
      body.style.height = "100vh";
      body.style.overflow = "hidden";
    } else {
      body.style.height = "auto";
      body.style.overflow = "auto";
    }
  }

  function progressBar(e){
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windowScroll / windowHeight * 100;
    progress.style.width = per + '%';
}


burgerMenu.addEventListener("click", toggleOpenClass);
burgerButton.addEventListener("click", toggleOpenClass);
window.addEventListener('scroll', progressBar);
