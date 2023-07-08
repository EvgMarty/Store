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

