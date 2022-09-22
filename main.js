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

window.addEventListener("load", () => {
  try {
    const interval = setInterval(function () {
      let activeTab = document.querySelector(
        '.tms-tabs-menu > [aria-selected="true"]'
      );
      let inactiveTab = document.querySelectorAll(
        '.tms-tabs-menu > [aria-selected="false"]'
      );

      let ActiveIcon = activeTab.children[0].children[1];
      ActiveIcon.src =
        "https://uploads-ssl.webflow.com/62bcaf4c9767291fa1cb720f/632c440326040b7f3a01ee60_line-1.svg";

      inactiveTab.forEach((n) => {
        n.children[0].children[1].src =
          "https://global-uploads.webflow.com/62bcaf4c9767291fa1cb720f/62bcc1942862382d560bab0a_plus.svg";
      });
    }, 10);
  } catch (error) {
    return;
  }
});
