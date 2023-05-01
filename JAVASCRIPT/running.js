//NavBar
const topBar = document.querySelector('#top-bar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 0) {
    topBar.classList.add('solid');
    topBar.style.borderRadius = '0';

  } else {
    topBar.classList.remove('solid');

  }
});

const secondBar = document.querySelector('#second');

window.addEventListener('scroll', () => {
  if(window.scrollY > 0) {
    secondBar.classList.add('solid2');
  } else {
    secondBar.classList.remove('solid2');
  }
});

//Explore Routes button

function routes() {
    location.href = "/HTML/routes.html";
}

const routeBtn = document.querySelector('#btn');
const innerBtn = document.querySelector('#explore');

routeBtn.addEventListener('mousedown', function() {

    innerBtn.classList.add('btnClicked');

})

routeBtn.addEventListener('mouseout', function() {
    innerBtn.classList.remove('btnClicked');
})

//Carousel
const arrowBtns = document.querySelectorAll("i");
const carousel = document.querySelector(".slider-container");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

arrowBtns.forEach(btn=>{
  btn.addEventListener("click", function(){
    carousel.scrollLeft += btn.id === "left" ? - firstCardWidth :firstCardWidth;
  });
});
let sliderContainer = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner-slider');

let pressed = false;
let startX;
let x;
sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});

sliderContainer.addEventListener("mouseout", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();
    x = e.offsetX;
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();
    x = e.offsetX;
    innerSlider.style.left = `${x - startX}px`;
        checkBoundary();
});

function checkBoundary() {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "-200%";
    }
    if (inner.right < outer.right) {
        innerSlider.style.left = "0";
        console.log("right");
    }
    if (parseInt(innerSlider.style.left) < `-${inner.width - outer.width}`) {
        innerSlider.style.left = `100px`;
    }
};
// Next and Prev button
