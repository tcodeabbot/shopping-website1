

const newNav = document.querySelector(".new-nav");
const pageLink = document.querySelector(".page-link");

const menuIcon = document.querySelector(".humberger-menu");
const navbar = document.querySelector(".new-navbar");
menuIcon.addEventListener('click', (e) => {
  navbar.classList.toggle("change")
})

// sproducts page

// const mainImg = document.getElementById("main-img");
// const smallImg = document.getElementsByClassName("small-img");

// smallImg[0].onClick = function() {
//   mainImg.src = smallImg[0].src;
// }
// smallImg[1].onClick = function() {
//   mainImg.src = smallImg[1].src;
// }
// smallImg[2].onClick = function() {
//   mainImg.src = smallImg[2].src;
// }
// smallImg[3].onClick = function() {
//   mainImg.src = smallImg[3].src;
// }
// sproducts page

const mainImg = document.getElementById("main-img");
const smallImg = document.getElementsByClassName("small-img");

smallImg[0].addEventListener('click', function() {
  mainImg.src = smallImg[0].children[0].src; // Access the image source inside the div
});

smallImg[1].addEventListener('click', function() {
  mainImg.src = smallImg[1].children[0].src;
});

smallImg[2].addEventListener('click', function() {
  mainImg.src = smallImg[2].children[0].src;
});

smallImg[3].addEventListener('click', function() {
  mainImg.src = smallImg[3].children[0].src;
});


