// функция подсчета общей стоимости заказа в корзине

function calcCartPrice (){
   // находим корзину 
   const cartWraper = document.querySelector('.cart-wraper');
   //Нашли внутри корзины карточку с товаром
   const cartItem = cartWraper.querySelectorAll('.product-card__mini');
   // //Нашли общую стоимость
   const cartPrice = document.querySelector('.total-price');
   
   let totalPrice = 0 ;

   // Делаем перебор наших карточек с товаром внутри корзины
   cartItem.forEach((item)=>{
      
      // У каждой карточки находим стоимость 
      const price = item.querySelector('.card__price-new').innerHTML;
      // У каждой карточки нахдим кол-во товара 
      const counter = item.querySelector('[data-counter]').innerHTML;

      //  перемножим стоимость каждого товара  на количество товара
      const curentPrice =  parseInt(price) * parseInt(counter);

      //Записать все перемноженое в общий прайс 
      totalPrice +=curentPrice;

   })

   // Добавляем общую цену на страницу 
   cartPrice.innerText = totalPrice;
   
}
