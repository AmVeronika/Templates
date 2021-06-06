let projectNum = document.querySelector('.project__number');
function init() {
   projectNum.classList.add('loading-grid');
}
//--------------------------------------------------------------
// Плавная прокрутка для навигации
let burgerLinks = document.querySelectorAll('.h4-burger-hover');
let burgerAnchors = document.querySelectorAll('.burger-anchor');
for (let item of burgerLinks) {
   item.onclick = () => {
      window.scrollTo({
         left: 0,
         top: burgerAnchors[item.dataset.id].offsetTop - 100,
         //offsetTop количество пикселей от верха до элемента
         behavior: "smooth",
      });
   }
}
//--------------------------------------------------------------
//  Прокрутка сбоку к началу страницы 
let btnUp = document.querySelector('.btn-up');
window.onscroll = () => {
   let scrollPage = window.pageYOffset;
   if (scrollPage >= 740) {
      btnUp.classList.add('btn-up-open');
   } else {
      btnUp.classList.remove('btn-up-open');
   }
}
btnUp.onclick = () => {
   window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
   })
}
//--------------------------------------------------------------
// Галерея, открытие картинки в большом размере
let portfolioBig = document.querySelector('.portfolio__big');
let portfolioImg = document.querySelectorAll('.portfolio__img');
let portfolioBigWrapp = document.querySelector('.portfolio__big-wrapp');
let portfolioImgBig = document.querySelector(".portfolio__img-big");
let leftStep;
for (let photo of portfolioImg) {
   photo.addEventListener('click', () => {
      portfolioBigWrapp.innerHTML = "";
      portfolioBig.style.display = "flex";
      portfolioImgBig.src = photo.src;
      portfolioBigWrapp.append(portfolioImgBig);
      leftStep = +photo.getAttribute('data-alt');//Для перелистывания картинок в портфолио
   })
}
// Закрыть просмотр фото
portfolioBig.onclick = (e) => {
   switch (e.target) {
      case portfolioBig:
         portfolioBig.style.display = "none";
         break;
   }
}
// Перелистывание фото влево, вправо
let portfolioBtns = document.querySelectorAll('.fa-chevron');
let quantityImg = portfolioImg.length - 1;//Счётчик для переключения, кол-во мини фоток 
// let portfolioImgBigClasses;
// let portfolioImgBigClass;
for (let btn of portfolioBtns)
   btn.addEventListener('click', () => {
      switch (btn.dataset.port_btn) {
         case 'left'://Если левая нажата кнопка 
            leftStep--;
            if (leftStep == -1) {
               leftStep = portfolioImg.length - 1;
            }
            //------------------------
            // portfolioBigWrapp.innerHTML = '';
            // portfolioImgBigClasses = portfolioImgBig.getAttribute('src').split('-');
            // portfolioImgBigClass = portfolioImgBigClasses[2].split('.');

            // portfolioImgBig.src = 'img/portfolio-img-' + (portfolioImgBigClass[0] - 1) + '.jpg';
            // portfolioBigWrapp.append(portfolioImgBig);
            // console.log(portfolioImgBigClass[0]);
            // if (portfolioImgBigClass[0] == 0) {
            //    portfolioImgBig.src = 'img/portfolio-img-' + (portfolioImg.length - 1) + '.jpg';
            // }
            break;
         case 'right'://Если правая нажата кнопка 
            leftStep++;
            if (leftStep == portfolioImg.length) {
               leftStep = 0;
            }
            //----------------------------
            // portfolioBigWrapp.innerHTML = '';
            // portfolioImgBigClasses = portfolioImgBig.getAttribute('src').split('-');
            // portfolioImgBigClass = portfolioImgBigClasses[2].split('.');
            // console.log(portfolioImgBigClass[0]);
            // portfolioImgBig.src = 'img/portfolio-img-' + (+portfolioImgBigClass[0] + 1) + '.jpg';

            // portfolioBigWrapp.append(portfolioImgBig);
            // if (portfolioImgBigClass[0] == portfolioImg.length - 1) {
            //    portfolioImgBig.src = 'img/portfolio-img-' + 0 + '.jpg';
            // }
            break;
      }
      portfolioImgBig.src = 'img/portfolio-img-' + leftStep + '.jpg';

   })


//--------------------------------------------------------------
// Настройка открытия отзывов details
let questionDetails = document.querySelectorAll('.question__block-open');
for (let item of questionDetails) {

   item.addEventListener('click', () => {
      switch (item.hasAttribute('open')) {
         case false:
            for (let details of questionDetails) {
               if (details.hasAttribute('open')) {
                  details.removeAttribute('open')
               }
            }
            break;
      }
   })


}




// Инициализация
window.onload = init;