console.log("hello world");
let menu = document.querySelector('#menu-icons');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};