      ScrollReveal().reveal(".text3", {
        duration: 2500,
        origin: "left",
        distance: "200px",
        reset: true,
      });

      ScrollReveal().reveal(".text5", {
        duration: 2000,
        origin: "right",
        distance: "230px",
        reset: true,
      });

      ScrollReveal().reveal(".text4", {
        duration: 2000,
        origin: "right",
        distance: "200px",
        reset: true,
      });
      ScrollReveal().reveal(".text6", {
        duration: 3000,
        origin: "bottom",
        distance: "200px",
        reset: true,
      });

      {
  const swiper = new Swiper('.swiper', {
    loop:true,
    initialSlide: 0,
    speed: 1000,
    effect:"coverflow",
    slidesPerView:3,
    coverflowEffect: {
      // rotate: 50,
      // stretch: 0,
      // depth: 100,
      // modifier: 1,
      slideShadows: false
    },
    pagination: {
      el:".swiper-pagination"
    },
    navigation: {
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev"
    }
  });
}