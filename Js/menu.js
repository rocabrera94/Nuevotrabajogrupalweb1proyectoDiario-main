"use strict";

document.addEventListener("DOMContentLoaded",
iniciarPagina);

function iniciarPagina(){

document.querySelector(".btn_menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("show");

}


}
