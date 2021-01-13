function myFunction(x) {
    if (x.matches) { // si responsive
     MeRemove();
    } else {
      MeAdd();
    }
  }
  var element = document.getElementById("responsive__logo");

  var x = window.matchMedia("(max-width: 991px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  
  function MeRemove() {
    element.classList.remove("d-none");
  }

  function MeAdd() {
    element.classList.add("d-none");
  }

var scene = document.getElementById('js-scene');
var parallax = new Parallax(scene);

//Accordion collapse

$(function ($) {
  $(".js-accordion-title").on("click", function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass("open", 200);
  });
});

