/*----- MENU TOGGLE */
const displayMenu = (navSwitch, navbar) => {
  const toggle = document.getElementById("nav-switch");
  const nav = document.getElementById("navbar");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

displayMenu("nav-switch", "navbar");

/*----- MENU MOBILE */
const navLinks = document.querySelectorAll(".nav-link");

function linkPressed() {
  const navMenu = document.getElementById("navbar");
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((n) => n.addEventListener("click", linkPressed));

/*----- DARK MODE */
var darkMode = document.getElementById("darkMode");

darkMode.onclick = function () {
  document.body.classList.toggle("dark-mode");
};

/*----- SCROLL TO SECTION */
const sections = document.querySelectorAll("section[id]");

function scrollSection() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollSection);

/*----- BACKGROUND HEADER */
function scrollHeader() {
  const header = document.getElementById("hero");
  if (this.scrollY >= 200) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*----- SCROLL TO TOP */
scrollTop = document.getElementById("toTop");

window.onscroll = function () {
  scrollToTop();
};

function scrollToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Samesite cookie
document.cookie = "cookie2=value2; SameSite=Lax; Secure";
