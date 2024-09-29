window.onload = function() {
  const logos = [
      document.getElementById('logo1'),
      document.getElementById('logo2'),
      document.getElementById('logo3')
  ];

  // Show first logo
  logos[0].style.opacity = 1;
  logos[0].style.transform = 'translateX(0)';
  
  // Show second logo after 2 seconds
  setTimeout(() => {
      logos[1].style.opacity = 1;
      logos[1].style.transform = 'translateY(0)';
  }, 2000);

  // Show third logo after another 2 seconds
  setTimeout(() => {
      logos[2].style.opacity = 1;
      logos[2].style.transform = 'translateX(0)';
  }, 4000);
};

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });