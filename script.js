let searchBar = document.querySelector('#search');
let searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = () => {
  searchBar.classList.toggle("active");
}

//navBar toggle
let navBar = document.querySelector('.navBar');
let closeBtn = document.querySelector('#close');
let menuBtn = document.querySelector('#menuBar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

closeBtn.onclick = () =>{
    menuBtn.classList.remove('bx-x');
    navBar.classList.remove('active');
}