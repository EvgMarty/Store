//находим корзину 
const cartWraper = document.querySelector('.cart-wraper');

//Отследили событие на всем окне 
window.addEventListener('click', (event)=>{

   // проверяем чтоб нажатие произошло по кнопке добавить в корзину
   if(event.target.hasAttribute('data-cart')){
      
      //Ищем от нажатой кнопки родителя и получаем нужную карту товара
      const productCart = event.target.closest('.product-card__mini');

      
      //Собираем данные с полученой карты и запишем их в обьект 
      const productInfo = {
         id: productCart.dataset.id,
         name: productCart.querySelector('.card__description-name').innerText,
         brand: productCart.querySelector('.card__description-brand').innerText,
         img: productCart.querySelector('.card__img').getAttribute('src'),
         newPrice: productCart.querySelector('.card__price-new').innerText,
         oldPrice: productCart.querySelector('.card__price-old').innerText,
         counter: productCart.querySelector('[data-counter]').innerText,
      }
      
      // проверяем есть ли товар в корзине 
      itemInProduct = cartWraper.querySelector(`[data-id="${productInfo.id}"]`);
      
      // Создаем условие 
      // если товар есть в корзине
      if(itemInProduct){
         // находим его счетчик 
         counterElement = itemInProduct.querySelector('[data-counter]');

         counterElement.innerText =  parseInt(counterElement.innerText) + parseInt(productInfo.counter);
      }else{
      // если товара нет в корзине
         // Сделали шаблоную строку и поместили в нее наши даные взяты из обьекта 
         const productItemHTML = `
                  <div class="product-card__mini" data-id="${productInfo.id}"> 
                  <img class="card__img" src="${productInfo.img}" alt="">
                  <div class="card__description">
                     <span class="card__description-name">${productInfo.name}</span>
                     <span class="card__description-brand">${productInfo.brand}</span>
                     <div class="card__price">
                        <span class="card__price-new">${productInfo.newPrice}</span>
                        <span class="card__price-old">${productInfo.oldPrice}</span>
                     </div>
                  </div>
                     <div class="card__buttons">
                        <div class="items">
                           <div class="items__control" data-action="minus">-</div>
                           <div class="items__current" data-counter="">${productInfo.counter}</div>
                           <div class="items__control" data-action="plus">+</div>
                        </div>
                        <button class="btn-like"></button>
                        <button class="btn-cart"></button>
                     </div>
         `

         // помещаем строку в корзину методом  insertAdjacentHTML
         cartWraper.insertAdjacentHTML('beforeend', productItemHTML);

      };

      // после добавления товара сбросим счетчик на 1
      productCart.querySelector('[data-counter]').innerText = '1';
      
      //Отображение  стату корзины пустая или нет 
      cartStatus();

      //персчет общей стоимости товара в корзине 
      calcCartPrice();
   };
});

