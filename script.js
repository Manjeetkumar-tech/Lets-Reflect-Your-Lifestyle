// console.log('upload here');
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnav = document.querySelector('.rightnav');
search = document.querySelector('.search');

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    rightnav.classList.toggle('visibility-resp');
    navlist.classList.toggle('visibility-resp');
    // search.classList.toggle('visibility-resp');
})
