let buttonMenu = document.querySelector('.header-services__button');
let menuList = document.querySelector('.header-services__menu');
let decoratePlus = document.querySelector('.decorate-plus');
let decorateMinus = document.querySelector('.decorate-minus');

buttonMenu.onclick = function() {
  menuList.classList.toggle('active');
};