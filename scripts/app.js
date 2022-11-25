const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    // links.classList.toggle('show-links');
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links');
    } else {
        links.classList.add('show-links');
    }
});


const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });