const card1 = document.querySelector('.shoeCard');
const card2 = document.querySelector('.clothesCard');
const card3 = document.querySelector('.socksCard');
const card4 = document.querySelector('.accessoriesCard');


var page1 = document.querySelector('.circle1');
var page2 = document.querySelector('.circle2');
var page3 = document.querySelector('.circle3');
var page4 = document.querySelector('.circle4');

const back1 = document.querySelector('.back1');
const back2 = document.querySelector('.back2');
const back3 = document.querySelector('.back3');
const back4 = document.querySelector('.back4');

card1.addEventListener('click', function() {
  page1.classList.add('expand');
})

    back1.addEventListener('click', function() {
      page1.classList.remove('expand');
    })
//
card2.addEventListener('click', function() {
  page2.classList.add('expand');
  
    back2.addEventListener('click', function() {
      page2.classList.remove('expand');
    })
})
//
card3.addEventListener('click', function() {
  page3.classList.add('expand');
})

    back3.addEventListener('click', function() {
      page3.classList.remove('expand');
    })
//
card4.addEventListener('click', function() {
  page4.classList.add('expand');
})

    back4.addEventListener('click', function() {
      page4.classList.remove('expand');
    })

//Clothes Horizontal Scroll
const scrollContainer = document.querySelector(".clothesPage");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});


//gallery
const track = document.getElementById("image-track");
const accessories = document.querySelector(".accessoriesPage");

accessories.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

accessories.onmouseup = e => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage =  track.dataset.percentage;
}

accessories.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.outerWidth / 1.5;
    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
console.log(track.dataset.prevPercentage)
    nextPercentage = Math.min(nextPercentage, 0);
    nextPercentage = Math.max(nextPercentage, -100);

    track.dataset.percentage = nextPercentage;
    track.style.transform = "translate(" + nextPercentage + "%, -50%)";

    for(const image of track.getElementsByClassName("image")) {
        
        image.style.objectPosition = (nextPercentage + 100) + "% 50%";
        image.animate({
            objectPosition: 100 + nextPercentage + "% center"
        }, {duration: 600, fill : "forwards"});
    }
}

