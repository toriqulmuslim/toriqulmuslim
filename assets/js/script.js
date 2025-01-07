'use strict';

document.addEventListener("mousemove", (e) => {
  const layers = document.querySelectorAll(".parallax-layer");
  const speedFactor = 100; // Adjust for parallax intensity

  layers.forEach((layer) => {
      const speed = layer.dataset.speed || 1;
      const x = (window.innerWidth - e.pageX * speed) / speedFactor;
      const y = (window.innerHeight - e.pageY * speed) / speedFactor;

      layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
});

var typed = new Typed(".typing", {
  strings: ["Auditor IT", "Financial Technology Developer", "Data Analyst or Data Scientist", "Quantitative Analyst"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  showCursor: false
})

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * Dynamic Visitor Counter
 */

let count = localStorage.getItem('visitorCount') || 0;
count++;
localStorage.setItem('visitorCount', count);
document.getElementById('visitor-count').innerText = `Visitor Count: ${count}`;


