//Меню и категории актив модалка

const dataModal = document.querySelectorAll('[data-modal]');


   //Перебор масива с елементами 
   dataModal.forEach(item => {

      //Отловили клик по елементу
      item.addEventListener('click', (event)=>{

         //Берем dataset нашего елемента и ищем елемент с таким же id
         const activeBar = event.target.dataset.modal;
         const barBox = document.querySelector('#' + activeBar);
         const close = barBox.querySelector('.menu__close');

         //открыть 
         barBox.classList.remove('hidden');
         body.classList.add('overflow');
         fadeBlock.classList.remove('hidden');

         //При нажатие на крестик в меню или модальное окно 
         fadeBlock.addEventListener('click',closeModal);
         close.addEventListener('click',closeModal);
   
         //Закрывать окно модальное и меню 
         function closeModal ( ){
            fadeBlock.classList.add('hidden');
            barBox.classList.add('hidden');
            body.classList.remove('overflow');
         };
      });
   });
