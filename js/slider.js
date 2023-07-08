//Слайдер

let offset = 0; // Смещение от левого края 

const sliderLine = document.querySelector('.slider-line');
const btnPrev = document.querySelector('.slider-prev');
const btnNext = document.querySelector('.slider-next');


btnPrev.addEventListener('click', ()=>{
   offset += 100;

   if(offset >= 300){
      offset = 0;
   }

   sliderLine.style.left = -offset + '%';

})

btnNext.addEventListener('click', ()=>{
   offset -= 100;

   if(offset < 0){
      offset = 200;
   }

   sliderLine.style.left = -offset + '%';

})
