//////////////////////////////
// Select the button with the class 'theme-switch'
const themeSwitchButton = document.querySelector('.theme-switch');

// Add an event listener to the button to toggle dark mode
themeSwitchButton.addEventListener('click', () => {
    // Toggle the 'red-mode' class on the body element
    document.body.classList.toggle('red-mode');
    var img1 = document.getElementById("imgone");
    var img2 = document.getElementById("imgtwo");

    // Define the image sources
    const hackerImgSrc = "./photos/hacker.png";
    const originalImgSrc1 = "./photos/hacker2.png"; // Original image for img1
    const originalImgSrc2 = "./photos/hacker2.png"; // Original image for img2

    // Check if the image is already 'hacker.png', toggle back to the original
    if (img1.src.includes("hacker.png")) {
        img1.src = originalImgSrc1;
        img2.src = originalImgSrc2;
    } else {
        img1.src = hackerImgSrc;
        img2.src = hackerImgSrc;
    }
});
////////////////////////////////theme//////////////////////////////



////////////////////////////////text/////////////////////////////
var typed = new Typed(".text", {
    strings: ["Jr.pentester" , "Web Developer" ,"Ethical Hacker"],
    typespeed:100,
    backspeed:100,
    backdelay:1000,
    loop:true 
});
////////////////////////////////text/////////////////////////////



////////////////////////////skills//////////////////////////////
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

////////////////////////////skills//////////////////////////////


///////////////////////////////////protfoli///////////////
var mixer = mixitup('.portfolio-gallery');
///////////////////////////////////protfoli///////////////


////////////////////////go top///////////////////////////////
//////////////////////// this for go to top///////////////////////////////////
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 
////////////////////////go top///////////////////////////////