//Функция меняющая статус постой корзины и отображения форми заказа товара

function cartStatus (){
   // находим корзину 
   const cartWraper = document.querySelector('.cart-wraper'); 
   // плашка пустая корзина   
   const cartEmpty = document.querySelector('[data-cart-empty]'); 
   // форма 
   const orderForm = document.querySelector('#order-form');


   // Делаем проверку если в корзине больше одного елемента 
   // спрятать плашку корзина пуста и отобразить форму для оформления заказа
   if(cartWraper.children.length > 0){
      orderForm.classList.remove('hidden');
      cartEmpty.classList.add('hidden');
   }else{
      orderForm.classList.add('hidden');
      cartEmpty.classList.remove('hidden');
   }
}