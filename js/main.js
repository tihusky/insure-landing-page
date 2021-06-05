'use strict';

//////////////////////////////
// Selectors

const nav = document.querySelector('#nav-mobile');
const btn = document.querySelector('#btn-nav-mobile');

//////////////////////////////
// Globals

let navVisible = nav.classList.contains('show');

//////////////////////////////
// Functions

const toggleNav = function () {
    // 1. Make nav element visible
    nav.classList.toggle('show');

    // 2. Update state
    navVisible = !navVisible;

    // 3. Update button
    setBtnIcon();
};

const setBtnIcon = function () {
    if (navVisible) {
        btn.innerHTML = '<img src="images/icon-close.svg" alt="Hide Menu">';
    } else {
        btn.innerHTML = '<img src="images/icon-hamburger.svg" alt="Open Menu">';
    }
}

//////////////////////////////
// Event Listeners

btn.addEventListener('click', toggleNav);


setBtnIcon();
