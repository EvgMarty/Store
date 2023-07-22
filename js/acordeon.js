//Акардеон
const acardeonTitle = document.querySelectorAll('[data-name="accordeon-title"]')

acardeonTitle.forEach(item =>{

   item.addEventListener('click', ()=>{
      const acardeonBox = item.querySelector('[data-name="accordeon-info"]');
      const plusMin = item.querySelector('[data-plus-min]');

      acardeonBox.classList.toggle('hidden');

      if(acardeonBox.classList.contains('hidden')){
         plusMin.classList.add('plus')
         plusMin.classList.remove('minus')
      }else{
         plusMin.classList.remove('plus')
         plusMin.classList.add('minus')
      }

   })



})
