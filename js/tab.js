//Табы
//Нашли таби и контент к ним
const tab = document.querySelectorAll('[data-tab]');
const tabContent = document.querySelectorAll('[data-tab-content]');



//Перебираем все табы
tab.forEach((item)=>{
   //Отследили нажатие по одному из табов 
   item.addEventListener('click',(event)=>{
      //Находим контейнер которй привязали к табу по ID
      const tabId = event.currentTarget.dataset.tab;
      const tabContentBox = document.querySelector('#'+ tabId );

      //Убираем у всех табов активный класс 
      tab.forEach((item)=>{
         item.classList.remove('main__info-item--active');
      })
      //Добавляем активный клас тому табу по которому кликнули
      item.classList.add('main__info-item--active');


      //Скрыть весь Таб Контент 
      tabContent.forEach((item)=>{
         item.classList.add('hidden')
      })

      //Открыть Таб Контен который мы нашли по ID
      tabContentBox.classList.remove('hidden');
   })
})
