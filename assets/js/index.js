document.querySelector(".hamburger").addEventListener('click', ()=>{
    let menuDesplegable = document.querySelector(".header__nav")
    if(menuDesplegable.classList.contains('open')){

        menuDesplegable.classList.remove('open');
      } else {
        menuDesplegable.classList.add('open');
      }
  })