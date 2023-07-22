
//Отследили событие на всем окне 
window.addEventListener('click', (event)=>{
   // Переменная для счетчика 
   let counter;

   //проверяем было ли нажатие  по кнопке плюс или минус
   if( event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ){
      // находим обертку счетчика
      const counterWraper = event.target.closest('.items');
      // находим каунтер с числом 
      counter = counterWraper.querySelector('[data-counter]');
   };


   // делаем проверку если кнопка +
   if(event.target.dataset.action === 'plus'){
      counter.innerText = ++counter.innerText;
   };

   // делаем проверку если кнопка - и если каунтер больше 1 
   if(event.target.dataset.action === 'minus' && counter.innerText > 1){
      counter.innerText = --counter.innerText;

      //проверка если минус нажат внутри корзини то можем удалить товар
   }else if(event.target.closest('.cart-wraper') && parseInt(counter.innerText) === 1){
      event.target.closest('.product-card__mini').remove();

      //Отображение  стату корзины пустая или нет 
      cartStatus();

      //персчет общей стоимости товара в корзине 
      calcCartPrice();
   };


   // делаем проверку если кнопка - или + нажата внути корзини
   if( event.target.hasAttribute('data-action') && event.target.closest('.cart-wraper')){
      //персчет общей стоимости товара в корзине 
      calcCartPrice();
   };

})

