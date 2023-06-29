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

      acardeonBox.classList.toggle('hidden');

      if(acardeonBox.classList.contains('hidden')){
         plusMin.classList.add('plus')
         plusMin.classList.remove('minus')
      }else{
         plusMin.classList.remove('plus')
         plusMin.classList.add('minus')
      }

   })

 
   item.addEventListener('mouseenter', ()=>{

      if(item.closest('.menu')){
         const acardeonBox = item.querySelector('[data-name="accordeon-info"]');

         acardeonBox.classList.remove('hidden');

         acardeonBox.addEventListener('mouseleave', (event)=>{
            acardeonBox.classList.add('hidden');
         })
      }
      
   })


})


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


//Табы
//Нашли таби и контент к ним
const tab = document.querySelectorAll('[data-tab]');
const tabContent = document.querySelectorAll('[data-tab-content]');


//Перебираем все табы
tab.forEach((item)=>{
   //Отследили нажатие по одному из табов 
   item.addEventListener('click',(event)=>{
      //Находим контейнер которй привязали к табу по ID
      const tabId = event.currentTarget.dataset.tab;
      const tabContentBox = document.querySelector('#'+ tabId );

      //Убираем у всех табов активный класс 
      tab.forEach((item)=>{
         item.classList.remove('main__info-item--active');
      })
      //Добавляем активный клас тому табу по которому кликнули
      item.classList.add('main__info-item--active');


      //Скрыть весь Таб Контент 
      tabContent.forEach((item)=>{
         item.classList.add('hidden')
      })

      //Открыть Таб Контен который мы нашли по ID
      tabContentBox.classList.remove('hidden');
   })
})



//Кнопки Добавления нрави и в корзину
const btnLike = document.querySelectorAll('.btn-like')
const btnCart = document.querySelectorAll('.btn-cart')

//Перебираем колекцию 
btnLike.forEach((item)=>{

   //При нажатии на елемент из колекции 
   item.addEventListener('click',(event)=>{

      //Определяем на какой елемент было нажатие
      const likeActive = event.target;
      //Даем клас актив 
      likeActive.classList.toggle('btn-like--active')

   })
})

//Перебираем колекцию 
btnCart.forEach((item)=>{

   //При нажатии на елемент из колекции 
   item.addEventListener('click', (event)=>{

      //Определяем на какой елемент было нажатие
      const cartActive = event.target;
      //Даем клас актив 
      cartActive.classList.toggle('btn-cart--active');

   })
})