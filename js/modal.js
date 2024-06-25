const btn = document.querySelectorAll('.disease__item');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');
const closed = document.querySelectorAll('.modal__close');

btn.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.toggle('modal-overlay--visible');
    document.body.classList.toggle('stop-scroll');
  });
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.remove('stop-scroll');
    });
  };
});

closed.forEach(function (el) {
  el.addEventListener('click', function () {

    modalOverlay.classList.remove('modal-overlay--visible');

    modals.forEach((elem) => {
      elem.classList.remove('modal--visible');
      document.body.classList.remove('stop-scroll');
    });
  });
})

const specialistCard = document.querySelectorAll('.specialist__info');
const modalOverlaySpecialist = document.querySelector('.modal-overlay-specialist');
const modalsSpecialist = document.querySelectorAll('.modal-specialist');
const closedSpecialist = document.querySelectorAll('.modal-specialist__btn-close');

specialistCard.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modalsSpecialist.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlaySpecialist.classList.toggle('modal-overlay--visible');
    document.body.classList.toggle('stop-scroll');
    modalOverlaySpecialist.scrollTop = 0;
  });
});

modalOverlaySpecialist.addEventListener('click', (e) => {
  if (e.target == modalOverlaySpecialist) {
    modalOverlaySpecialist.classList.remove('modal-overlay--visible');
    modalsSpecialist.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.remove('stop-scroll');
    });
  };
});

closedSpecialist.forEach(function (el) {
  el.addEventListener('click', function () {
    modalOverlaySpecialist.classList.remove('modal-overlay--visible');
    modalsSpecialist.forEach((elem) => {
      elem.classList.remove('modal--visible');
      document.body.classList.remove('stop-scroll');
    });
  });
})

