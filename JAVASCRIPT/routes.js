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
const hiddenElements = document.querySelectorAll('.text');
hiddenElements.forEach((e1) => observer.observe(e1));


const slider = document.querySelector('#routes');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('hold');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('hold');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('hold');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});
//


const text1 = document.querySelector('.text1'); const text2 = document.querySelector('.text2'); const text3 = document.querySelector('.text3'); const text4 = document.querySelector('.text4'); const text5 = document.querySelector('.text5'); const text6 = document.querySelector('.text6'); const text7 = document.querySelector('.text7'); 


text1.addEventListener('click', function() {
  window.open("https://www.google.com/maps/place/Schuylkill+River+Trail,+Philadelphia,+PA/@39.9577983,-75.1834374,17z/data=!3m1!4b1!4m10!1m2!2m1!1sschuylkill+river+trail!3m6!1s0x89c6c64bd22d5589:0x51ecc4f9551e3350!8m2!3d39.9577984!4d-75.1785665!15sChZzY2h1eWxraWxsIHJpdmVyIHRyYWlskgEFdHJhaWzgAQA!16s%2Fg%2F11bwd9pncm?hl=en-US", '_blank');
})

text2.addEventListener('click', function() {
  window.open("https://www.google.com/maps/place/Boxer's+Trail,+Philadelphia,+PA+19121/@39.9937938,-75.2148511,13.88z/data=!4m6!3m5!1s0x89c6c79eb28414cd:0x58b054ba4c1c61ff!8m2!3d39.9875988!4d-75.1987577!16s%2Fg%2F1tfq5m3q", '_blank');
})

text3.addEventListener('click', function() {
  window.open("https://www.google.com/maps/place/Benjamin+Franklin+Bridge/@39.9528771,-75.1369564,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6c88b1d029239:0x2a21f4865447d6e!8m2!3d39.9528771!4d-75.1343815!16zL20vMDI4X3Bn", '_blank');
})

text4.addEventListener('click', function() {
  window.open("https://www.google.com/maps/place/Bartram's+Garden/@39.9327413,-75.2170724,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6c684efff3599:0x6bdeffbb106d9eb4!8m2!3d39.9327414!4d-75.2122015!16zL20vMGNsNHE0", '_blank');
})

text5.addEventListener('click', function() {
  window.open("https://www.google.com/maps/search/FDR+Park/@39.9020238,-75.1850014,16z/data=!3m1!4b1", '_blank');
})

text6.addEventListener('click', function() {
  window.open("https://www.google.com/maps/place/Kelly+Dr,+Philadelphia,+PA/@39.9646983,-75.180543,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6c787c9cc737f:0x72c9dfbfaa6809ad!8m2!3d39.9646983!4d-75.1779681!16s%2Fm%2F02p9h43", '_blank');
})

text7.addEventListener('click', function() {
  window.open("https://www.google.com/maps/place/Belmont+Plateau/@39.9888967,-75.21602,16.79z/data=!4m6!3m5!1s0x89c6c76dec48bff5:0x81790e193304fe94!8m2!3d39.9903243!4d-75.2126639!16s%2Fg%2F11fxb8l7fn", '_blank');
})


/*const track = document.getElementById("routes");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = e => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage =  track.dataset.percentage;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
console.log(track.dataset.prevPercentage)
    nextPercentage = Math.min(nextPercentage, 0);
    nextPercentage = Math.max(nextPercentage, -100);

    track.dataset.percentage = nextPercentage;
    track.style.transform = "translate(" + nextPercentage + "%, -0%)";
}*/

// var lastScrollTop = window.pageYOffset;

//   window.onscroll = function(e) {
//     var st = window.pageYOffset || document.documentElement.scrollTop; 
//    if (st > lastScrollTop){
//       document.body.scrollBy({ left: 100, behavior: 'smooth' });

//       console.log("right");
//    } else if (st < lastScrollTop) {
//       document.body.scrollBy({ left: -100, behavior: 'smooth' });

//       console.log("left");
//    }
//    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//   }
