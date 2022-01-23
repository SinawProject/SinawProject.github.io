const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    // },
    
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: 'true',
    // },

    preloadImages: false,

    lazy: {
      loadOnTransitionStart: false,
      loadPervNext: false,
    },

    watchSlideProgress: true,
    watchSlideVisibility: true,

    autoHeight: true,

    slidesPerView: 3,
    centeredSlides: true,

    effect: 'coverflow',
    coverflowEffect: {
    rotate: 45,
    stretch: 20,
    slideShadows: false,
  },


    // speed: 800,

    // preloadImages: false,

    // lazy: {
    //   loadPrevNext: true,
    //   loadOnTransitionStart: false,
    // },

    // watchSlidesProgress: true,
    // watchSlidesVisibility: true,

    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 20
    //   },
    //   480: {
    //     slidesPerView: 1,
    //     spaceBetween: 30
    //   },
    //   640: {
    //     slidesPerView: 1,
    //     spaceBetween: 40
    //   }
    // }

  });