//Найти инпут и форму 
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form__txt');

//Поле отображения найденного товара 
const searchContent = document.querySelector('.search');

//Товар не найдено надпись
const noProduct = document.querySelector('.no__product');

// наименования товаров 
const cardDescriptionName = document.querySelectorAll('.card__description-name');


//Собитие отследили  при нажатии на отправку формы
searchForm.addEventListener('submit', (event)=>{

   //предотвратили обычное поведение отправки форм 
   event.preventDefault(); 
   
   //Визиваем функцию сброса меню поиска если до етого что то там было очистит 
   resetSearch();

   //Получили текст инпута без пробелов вначале и конце  trim()
   const word = searchInput.value.trim();

   //Условие если не пустая строка то работаем 
   if(word != ''){

      //Перебираем каждый елемент колекции с товаром 
      cardDescriptionName.forEach((item)=>{

         //наименование товара
         const text = item.textContent;

         //карточки с содержимим товара 
         const product = item.closest('.product-card__mini');

         if( word == text){
            //Если нашло товар удаляем надпись товар не найденно 
            noProduct.classList.add('hidden')
            //Копируем племент которій нашли 
            const productCopy = product.cloneNode(true);
            //Добавляем карточку с найденым товаром 
            searchContent.append(productCopy);
         }

      })

   }

   childrens ()

   //Очищаем строку ввода 
   searchInput.value = '';

   //Открываем меню поиска 
   searchContent.classList.remove('hidden');
   //Нашли внутри кнопку закрития поиска 
   const closeSearh = searchContent.querySelector('.menu__close');

   //При нажатии закрили меню поиска и очищаем его 
   closeSearh.addEventListener('click', ()=>{

      //Прячем наше меню поиска 
      searchContent.classList.add('hidden');

      //Визиваем функцию сброса меню поиска 
      resetSearch();
   })

})


//Функция проверки кол-во  елементов в нашем меню поиска 
function childrens (){

   const child = searchContent.childElementCount;

   if(child >= 4){
      //Если больше положенного убираем надпись товар не найденно 
      noProduct.classList.add('hidden')
   }else{
      //Если меньше положенного добавляем надпись товар не найденно
      noProduct.classList.remove('hidden')
   }
}


 //Функцию сброса меню поиска 
function resetSearch (){
   //Находим наши карточки внутри меню поиска список с товаром
   const productList = searchContent.querySelectorAll('.product-card__mini');

   //перебираем и удаляем их 
   productList.forEach((item)=>{
      item.remove();
   })
}




