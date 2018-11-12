window.addEventListener('DOMContentLoaded', function() {

  // исходные данные

  //var elems = 
  /*var selectedimg;
  var div = document.getElementById('ter');

  // Логика

  div.onclick = function(event) {
    var target = event.target;
  
    // цикл двигается вверх от target к родителям до table
    while (target != this) {
      if (target.tagName == 'IMG') {
        // нашли элемент, который нас интересует!
        highlight(target);
        return;
      }
      target = target.parentNode;
    }

    function highlight(node) {
      if (selectedimg) {
        selectedimg.classList.remove('red');
      }
      selectedimg = node;
      selectedimg.classList.add('red');
    }
  }*/

  var ShowImg = document.getElementById("imgShow");
  var divBlack = document.getElementById("black");
  var divImg = document.getElementById("BoxImg");
  var IMGBOXShow = document.getElementById("imgShow")

   function closImg(){

    divBlack.classList.remove('blackShow');
    divImg.classList.remove('BoxImgShow');

   };

   function openImg(){

    divBlack.classList.add('blackShow');
    divImg.classList.add('BoxImgShow');

  };



  var elements = document.querySelectorAll(".imgg");

for (var i = 0; i < elements.length; i++) {

  elements[i].onclick = function(){

    if (divImg.classList.contains("BoxImgShow")== false){
      ShowImg.src = this.src;
      openImg();

    };
  };
};

function moduleform() {

  if(divImg.classList.contains("BoxImgShow")){

    closImg();

  } else {

    openImg()

  };
};

IMGBOXShow.addEventListener("click", moduleform);
divBlack.addEventListener("click", moduleform);

});


// 0%2 остаток от деления 0
// 1%2 остаток отделения 1
// 2%2 остаток от деления 0
// 3%2 остаток от деления 1
// 4%2 остаток от делления 0
// 5%2 остаток от деления 1
// 6%2 остаток от деления 0