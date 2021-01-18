//Responsive
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

//Rating
(function() {
  var classes, count, d, range, updateStars;

  d = document;

  range = d.querySelector('#star-rating');

  count = d.querySelector('#star-count');

  classes = d.querySelector('#stars').classList;

  updateStars = function(event) {
    var formattedVal, val;
    val = this.value || 0;
    //Change Value
    formattedVal = range.value;
    console.log("la valeur rating est : " + formattedVal);

    while (classes.length > 1) {
      classes.remove(classes.item(1));
    }
    //count.innerHTML = val;
    return classes.add('stars-' + formattedVal);
  };

  range.addEventListener('change', updateStars);

  updateStars();

}).call(this);
