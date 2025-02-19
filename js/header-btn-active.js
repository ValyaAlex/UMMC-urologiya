let headerBtn = document.querySelector('.header__btn');

window.addEventListener("scroll", trackScroll);

function trackScroll() {
  const scrolled = window.scrollY;
  const heroBanner = document.querySelector('.hero')
  const coords = heroBanner.offsetHeight;
  if (scrolled > coords) {
    headerBtn.classList.add('header__btn--active');
  } else {
    headerBtn.classList.remove('header__btn--active');
  }
}