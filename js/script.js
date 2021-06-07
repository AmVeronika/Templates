let projectNum = document.querySelector('.project__number');
function init() {
   projectNum.classList.add('loading-grid');
}
//--------------------------------------------------------------
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
//--------------------------------------------------------------
// Перелистывание фото в проектах при клике мыши на значение input
let projectCardLinks = document.querySelectorAll('.project__card-link');//Блок ссылка, куда вставляется картинка, коллекция
let projectCardImgs = document.querySelectorAll('.project__card-img');//Картинка с проекта, коллекция
let reactangles = document.querySelectorAll('.reactangle');//Input ползунок, коллекция
let reactanglesInput;// в каком блоке нажат инпут
let reactanglesValue;// какое значение инпута в блоке
for (let input of reactangles) {
   input.onclick = () => {
      reactanglesInput = input.getAttribute("data-inp");
      reactanglesValue = input.value;
      if (reactanglesInput) {
         if (reactanglesValue) {
            projectCardImgs[reactanglesInput].src = 'img/project-arena-' + reactanglesValue + '.jpg';
         }
      }
   }
}
//--------------------------------------------------------------
// Перелистывание фото в проектах при наведении мыши на значение input (не работает)
// reactangle.addEventListener ("mouseover", () => {
//    reactangle.value;
//    console.log();
// projectCardLink.innerHTML = '';
//    projectCardImg.src = 'img/project-arena-' + reactangle.value + '.jpg';
//    projectCardLink.append(projectCardImg);
// });
//--------------------------------------------------------------
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
//--------------------------------------------------------------
// Закрыть просмотр фото
portfolioBig.onclick = (e) => {
   switch (e.target) {
      case portfolioBig:
         portfolioBig.style.display = "none";
         break;
   }
}
//--------------------------------------------------------------
// При нажатии Esc 
window.onkeydown = (evt) => {
   if (evt.keyCode == 27) {
      portfolioBig.style.display = "none";
   }
   // или <body onkeydown="ESCclose(event)">
}
//--------------------------------------------------------------
//--------------------------------------------------------------
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