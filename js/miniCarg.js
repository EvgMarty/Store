const miniCardProduct = [
   {
      id: 'new-discounts',
      name: 'Сандалі',
      brand: 'DeeZee',
      img: 'new-discounts/DeeZee.png',
      price: 339,
      oldPrice: 560,
   },
   {
      id: 'new-discounts',
      name: 'В єтнамки',
      brand: 'Colin s ',
      img: 'new-discounts/Colins.png',
      price: 152,
      oldPrice: 349,
   },
   {
      id: 'new-discounts',
      name: 'Срібна каблучка',
      brand: 'Golden Silver',
      img: 'new-discounts/GoldenSilver.png',
      price: 1473 ,
      oldPrice: 2782,
   },
   {
      id: 'new-discounts',
      name: 'Шльопанці',
      brand: 'No Brand',
      img: 'new-discounts/Flip.png',
      price: 349,
      oldPrice: 488,
   },
   {
      id: 'new-discounts',
      name: 'Футболка',
      brand: 'No Brand',
      img: 'new-discounts/Roza.png',
      price: 138,
      oldPrice: 380,
   },
   {
      id: 'new-discounts',
      name: 'Набір шкарпеток',
      brand: 'Rovix',
      img: 'new-discounts/Rovix.png',
      price: 299,
      oldPrice: 450,
   },

]


//колекция атрибутов миникарт
const dataMiniCard = document.querySelectorAll('[data-miniCard]')

//Перебираем все елементы на странице
dataMiniCard.forEach((item)=>{
   //Получаем каждый айтем с колекции
   const subject = item;


   //Делаем перебок нашего масива с товаром
   miniCardProduct.forEach((item)=>{

      //В шаблоную строку подставляем данные с масива
      const card = `<div class="product-card__mini">
                     <img class="card__img" src="./img/miniCard/${item.img}"  alt="">
                     <div class="card__description">
                        <span class="card__description-name">${item.name}</span>
                        <span class="card__description-brand">${item.brand}</span>
                        <div class="card__price">
                           <span class="card__price-new">${item.price}₴</span>
                           <span class="card__price-old">${item.oldPrice}₴</span>
                        </div>
                     </div>
                        <div class="card__buttons">
                           <button class="btn-like"></button>
                           <button class="btn-cart" ></button>
                        </div>
                  </div>`;

      //Рендерим товар в наши айтемы которые мы получили из колекции 
      subject.insertAdjacentHTML('beforeend', card)

   })

})



// const collectionStuff = document.querySelector('[data-miniCard="new-discounts"]');


// function render (){

//    miniCardProduct.forEach((item)=>{


//       const card = `<div class="product-card__mini">
//                      <img class="card__img" src="./img/miniCard/${item.img}"  alt="">
//                      <div class="card__description">
//                         <span class="card__description-name">${item.name}</span>
//                         <span class="card__description-brand">${item.brand}</span>
//                         <div class="card__price">
//                            <span class="card__price-new">${item.price}₴</span>
//                            <span class="card__price-old">${item.oldPrice}₴</span>
//                         </div>
//                      </div>
//                         <div class="card__buttons">
//                            <button class="btn-like"></button>
//                            <button class="btn-cart" ></button>
//                         </div>
//                   </div>`;


//       collectionStuff.insertAdjacentHTML('beforeend', card)

//    })

// }

// render();

