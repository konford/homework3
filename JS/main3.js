window.addEventListener('load', function() {

    //----- Секция исходных данных ---------------------------
  
    var burger = document.querySelector(".burger");
    var clos = document.querySelector(".form-close");
    var bur = document.getElementById('br');
    var button = document.getElementById('btn');
    var good = document.getElementById('windowOk');
    var bed = document.getElementById('windowNot');
    var fid = document.getElementById('tex');
  
  
    //------ Секция логики ---------------------------
  
    function focusInForm(){

      fid.focus();

    };

    function openForm() {
  
      burger.classList.add('burger-show');
      fid.value="";
  
    }
  
    function closeForm() {
  
      burger.classList.remove('burger-show');
      bed.classList.remove('windowNot-show');
      fid.value="";

    }
  
  
  
    function toggleForm() {
  
      if (burger.classList.contains('burger-show')) {
  
        closeForm();
  
      } else {
  
        openForm();
        focusInForm();

      }
  
    }

    function showOk (){

      if (good.classList.contains('windowOk-show')) {
  
        good.classList.remove('windowOk-show');
        
      } else {
  
        good.classList.add('windowOk-show');
        burger.classList.remove('burger-show');
        setTimeout(showOk, 1000);

    };
  }
    function showNot (){
    
          bed.classList.add('windowNot-show');
    
        }

    function logTest() {

        var fid = document.getElementById('tex').value;
    
        if (fid.length == 0) {
    
          showNot();
    
        } else {
    
          showOk();
          bed.classList.remove('windowNot-show');
          
        }
    
      }
      function showNotshek() {



        var fid = document.getElementById('tex').value;
    
    
    
        if (fid.length == null) {
    
          bed.classList.add('windowNot-show');
    
        } else {
    
          bed.classList.remove('windowNot-show');
          
        }
    
      }
      
    //------- Секция событий ----------------------------
  
    bur.addEventListener('click', toggleForm);
  
    clos.addEventListener('click', closeForm);
  
    button.addEventListener('click', logTest);

    //good.addEventListener('click', showOk);
    
    fid.addEventListener("keydown", showNotshek)

    fid.addEventListener("focus", showNotshek)

  });