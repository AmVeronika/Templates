let projectNum = document.querySelector('.project__number');
let burgerLinks = document.querySelectorAll('.h4-burger-hover');
let burgerAnchors= document.querySelectorAll('.burger-anchor');

function init(){
   projectNum.classList.add('loading-grid');
}

for (let item of burgerLinks) {
   item.onclick = () => {
      window.scrollTo({
         behavior: "smooth",
         left: 0,
         top: burgerAnchors[item.dataset.id].offsetTop - 100,
         
      });
   }
}


// Инициализация
window.onload = init;