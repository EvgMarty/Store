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

