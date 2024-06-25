const goTopBtn = document.querySelector(".go-top");
let headerBtn = document.querySelector('.header__btn');

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.scrollY;
  const coords = document.documentElement.clientHeight - 200;
  if (scrolled > coords) {
    goTopBtn.classList.add("go-top--show");
    headerBtn.classList.add('header__btn--active');
  } else {
    goTopBtn.classList.remove("go-top--show");
    headerBtn.classList.remove('header__btn--active');
  }
}

function goTop() {
  if (window.scrollY > 0) {
    window.scroll(0, -window.innerHeight); 
  }
}