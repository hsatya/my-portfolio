const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bar-wrapper");

const progressBarPercents = [90, 70, 80, 70, 65, 50, 80];
const navbarOffsetTop = navbar.offsetTop;

function updateOnScroll() {
  if (window.scrollY >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else if (window.scrollY < navbarOffsetTop) {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.scrollY >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarlink) => {
        navbarlink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  if (window.scrollY + window.innerHeight >= progress.offsetTop) {
    progress.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
}

window.addEventListener("scroll", updateOnScroll);
updateOnScroll();

window.addEventListener("resize", () => {
  window.location.reload();
});
