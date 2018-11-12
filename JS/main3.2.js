window.addEventListener('DOMContentLoaded', function() {

  // -----------------------исходные данные-----------------------

  var slides = document.querySelectorAll('#slides .slide');
  var currentSlide = 0;


  // -----------------------логика-----------------------


  function goToSlide(n) {                                         // функция которая прокручивает слайды

    slides[currentSlide].className = 'slide';

    currentSlide = (n + slides.length) % slides.length;                

    slides[currentSlide].className = 'slide showing';
  }

  function nextSlide() {                                              // функция которая прокручивает на один слайд вперед
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {                                          // функция которая прокручивает на один слайд назад
    goToSlide(currentSlide - 1);
  }

  var timer;

  function TimerSlide() {
   timer = setInterval(nextSlide, 2000);
  };
  function TimerSlideSTOP() {
    clearInterval(timer);
  };


  

  // -----------события--------------------------------------

  next.onclick = function() {

    TimerSlide();
    next.disabled="disabled";
  };
  previous.onclick = function() {
    TimerSlideSTOP();
    next.disabled="";
    
  };
});


// ((0+1))+5%5)  - 1
// ((1+1))+5%5)  - 2
// ((2+1))+5%5)  - 3
// ((3+1))+5%5)  - 4
// ((4+1))+5%5)  - 0
// ((5+1))+5%5)  - 1
// ((6+1))+5%5)  - 2