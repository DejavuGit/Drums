$(function () {


  // const offset = 100;
  // const scrollUp = document.querySelector('.scroll-up');
  // const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
  // const pathLength = scrollUpSvgPath.getTotalLength();
  
  // scrollUpSvgPath.style.strokeDasharray = '${pathLength} ${pathLength}'
  // scrollUpSvgPath.style.transition = 'stroke-dashoffset 30ms'
  
  // const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
  
  // const updataDashoffset = () => {
  //   const height = document.documentElement.scrollHeight - window.innerHeight;
  //   const dashoffset = pathLength - (getTop() * pathLength / height);

  //   scrollUpSvgPath.style.strokeDashoffset = dashoffset;
    
  // };


// window.addEventListener('scroll' , () =>{
//   updataDashoffset();
//   if( getTop() > offset ){
//     scrollUp.classList.add('scroll-up--active')
//   } else {
//     scrollUp.classList.remove('scroll-up--active')
    
//   }
//   });

//   scrollUp.addEventListener('click' , () =>{
//   window.scrollTo({
//     top:0,
//     behavior: 'smooth'
//   });
// });



 


  const Spepsswiper = new Swiper('.swiper-steps', {
    speed: 1200,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        origin: "left center",
        translate: ["-5%", 0, -200],
        rotate: [0, 100, 0],
      },
      next: {
        origin: "right center",
        translate: ["5%", 0, -200],
        rotate: [0, -100, 0],
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
   
    
   
  });

 const swiper = new Swiper('.swiper-lesson', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const mainswiper = new Swiper('.swiper-home', {
  // slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  speed: 1000,
  spaceBetween: 16,
  autoplay: {
    delay: 8000,
  },
  direction: "vertical",

});
});