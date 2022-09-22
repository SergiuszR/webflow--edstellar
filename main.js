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

  if (window.scrollY > 50) {
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

let showAll = document.querySelector("#show-all");
let pillItems = document.querySelectorAll(".pill-item-category");

showAll.addEventListener("click", () => {
  showAll.classList.add("active");
});

pillItems.forEach((n) => {
  n.addEventListener("click", () => {
    showAll.classList.remove("active");
  });
});
