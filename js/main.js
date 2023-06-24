//Меню и категории актив
const dataActive = document.querySelectorAll('[data-active]');
const fadeBlock = document.querySelector('.fade-block');
windowSize();
//Функция проверяет розширение
function windowSize (){

   //если больше 814px віходим из функции если меньше продолжаем работать 
   if (document.documentElement.clientWidth > 814) return;

  
   //Перебор масива с елементами 
   dataActive.forEach(item => {

      //Отловили клик по елементу
      item.addEventListener('click', (event)=>{

         //Берем dataset нашего елемента и ищем елемент с таким же id
         const activeBar = event.target.dataset.active;
         const barBox = document.querySelector('#' + activeBar);
         const close = barBox.querySelector('.menu__close');


         //открыть 
         barBox.classList.add('menu--active')
         fadeBlock.classList.remove('hidden')

         //При нажатие на крестик в меню или модальное окно 
         fadeBlock.addEventListener('click',closeBlockBox)
         close.addEventListener('click',closeBlockBox)
   
         //Закрывать окно модальное и меню 
         function closeBlockBox ( ){
            fadeBlock.classList.add('hidden')
            barBox.classList.remove('menu--active')
         }

      })
   });
};

//Акардеон
const acardeonTitle = document.querySelectorAll('[data-name="accordeon-title"]')




acardeonTitle.forEach(item =>{

   item.addEventListener('click', ()=>{
      const acardeonBox = item.querySelector('[data-name="accordeon-info"]');
      const plusMin = item.querySelector('[data-plus-min]');

      acardeonBox.classList.toggle('hidden')

      if(acardeonBox.classList.contains('hidden')){
         plusMin.classList.add('plus')
         plusMin.classList.remove('minus')
      }else{
         plusMin.classList.remove('plus')
         plusMin.classList.add('minus')
      }

   })

})


// //Слайдер
// const slider = document.querySelector('.slider');
// const sliderBlock = document.querySelector('.slider-block');

// slider.addEventListener('touchstart',handleTouchstart,false)
// slider.addEventListener('touchmove',handleTouchmove,false)


// let x1 = null;
// let y1 = null;

// function handleTouchstart (event){

//    const firstTouch = event.touches[0];
   
//    x1 = firstTouch.clientX;
//    y1 = firstTouch.clientY;


// }


// function handleTouchmove (event){

//    if(!x1 || !y1 ){
//       return false
//    }

   
//    let x2 = event.touches[0].clientX;
//    let y2 = event.touches[0].clientY;
  
//    let xDiff = x2-x1;
//    let yDiff = y2-y1;

//    if(Math.abs(xDiff) > Math.abs(yDiff) ){
//       //r-l
//       xDiff>0? console.log('right'): console.log('left');}
//    else{
//       //t-b
//       yDiff>0? console.log('bot'): console.log('top');
//    }
      
   

//    x1 = null;
//    y1 = null;
// }

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

