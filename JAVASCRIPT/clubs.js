const topBar = document.querySelector('#top-bar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 600) {
    topBar.classList.add('solid');
    topBar.style.borderRadius = '0';

  } else {
    topBar.classList.remove('solid');

  }
});

const secondBar = document.querySelector('#second');

window.addEventListener('scroll', () => {
  if(window.scrollY > 270) {
    secondBar.classList.add('solid2');
  } else {
    secondBar.classList.remove('solid2');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entry")
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements.forEach((e1) => observer.observe(e1));
hiddenElements2.forEach((e1) => observer.observe(e1));
