const burger =document.querySelector('.burger')
const nav=document.querySelector('.nav')

burger.addEventListener('click',()=>{
    nav.classList.toggle('active')
})

const swiper = new Swiper('.swiper_1', {

   
    loop: true,
    slidesPerView:1,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
  });