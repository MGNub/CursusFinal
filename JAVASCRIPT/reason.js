const topBar = document.querySelector('#top-bar');
const topBarText = document.querySelector('a');
const pages = document.querySelector('.pages');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    topBar.classList.add('solid');
    topBar.style.borderRadius = '0';
    topBar.style.width = "100%";
  } else {
    topBar.classList.remove('solid');
    topBar.style.borderRadius = '100px';
  }
});

window.onload = function() {
  window.addEventListener("scroll", function() {
    var slide = document.getElementById("slide");
    if (window.scrollY > 10) {
      slide.classList.add("fade-out");
      slide.style.color = "transparent";
    } else {
      slide.classList.remove("fade-out");
      slide.classList.add("fade-out");
      slide.style.color = "white";
    }
  });
};
window.onload = function() {
  let wordFont = document.getElementsByClassName("main-text p");
  wordFont.style.fontFamily = "Josefin Sans, sans-serif";
}
