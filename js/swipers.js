const swiperphoto = new Swiper(".swiper-photo", {
    direction: "horizontal",
    autoplay: true,
    loop: true,
  
    autoplay: {
      delay: 5000
    },
  
    slideNext: {
      runCallbacks: false,
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: false
    },
  
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}'
    },
  });


const swiper = new Swiper(".swiper-operation", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,

    pagination: false,

    slideNext: {
        runCallbacks: false,
    },

    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },

    a11y: {
        paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
});


/*const swiper2 = new Swiper(".swiper-info", {
    direction: "vertical",
    loop: false,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 15,

    pagination: {
        el: ".swiper-pagination"
    },


    slideNext: {
        runCallbacks: false,
    },

    navigation: {
        nextEl: ".info-next",
        prevEl: ".info-prev",
    },

    a11y: {
        paginationBulletMessage: 'Перейти к слайду {{index}}',
    },

    breakpoints: {

        550: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20
        },

        900: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 25
        },

        1550: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40,
            pagination: false
            {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true
              },
        }
    }
}); */

