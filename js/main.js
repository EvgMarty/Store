//Меню и категории актив меню
const dataActive = document.querySelectorAll('[data-active]');
const fadeBlock = document.querySelector('.fade-block');
const body = document.querySelector('body');


  
   //Перебор масива с елементами 
   dataActive.forEach(item => {

      //Отловили клик по елементу
      item.addEventListener('click', (event)=>{

         //Берем dataset нашего елемента и ищем елемент с таким же id
         const activeBar = event.target.dataset.active;
         const barBox = document.querySelector('#' + activeBar);
         const close = barBox.querySelector('.menu__close');


         //открыть 
         barBox.classList.add('menu--active');
         body.classList.add('overflow');
         fadeBlock.classList.remove('hidden');

         //При нажатие на крестик в меню или модальное окно 
         fadeBlock.addEventListener('click',closeBlockBox);
         close.addEventListener('click',closeBlockBox);
   
         //Закрывать окно модальное и меню 
         function closeBlockBox ( ){
            fadeBlock.classList.add('hidden');
            barBox.classList.remove('menu--active');
            body.classList.remove('overflow');
         };

      });
   });


