function navbarPosition() {
  let navbar = document.querySelector(".container.navbar");
  let navbarHeight = window.getComputedStyle(navbar).height;
  let navLayout = document.querySelector(".w-nav-overlay");
  navLayout.style.top = navbarHeight;
}
window.addEventListener("click", navbarPosition);
window.addEventListener("resize", navbarPosition);
window.addEventListener("scroll", navbarPosition);

function navbarBg() {
  let navbar = document.querySelector(".container.navbar");

  if (window.scrollY > 100) {
    navbar.classList.add("white-bg");
    navbar.classList.add("small");
  } else {
    navbar.classList.remove("white-bg");
    navbar.classList.remove("small");
  }
}

window.addEventListener("load", navbarBg);
window.addEventListener("scroll", navbarBg);
window.addEventListener("resize", navbarBg);

// window.addEventListener("load", () => {
//   let expertSlider = document.querySelector(".experts-slider-content");
//   let expertSliderHeight = window.getComputedStyle(expertSlider).height;
//   let expertSlide = document.querySelectorAll(".slide--expert");

//   expertSlide.forEach((n) => {
//     n.style.height = `${expertSliderHeight}px`;
//   });
// });
