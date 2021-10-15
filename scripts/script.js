const swipe = document.querySelector('.switch-btn');
let switce = 0;

function switc() {
  if( switce == 0 ){
    switce = 1
    document.querySelector('.body').classList.add('body-dark')
    document.querySelector('.body-dark').classList.remove('body')
    swipe.classList.add('switch-on')
}else {
    switce = 0
    document.querySelector('.body-dark').classList.add('body')
    document.querySelector('.body').classList.remove('body-dark')
    swipe.classList.remove('switch-on')
}
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector('.body').classList.add('mobile')
  } else {
    console.log('ПК')
}

swipe.addEventListener('click', switc)