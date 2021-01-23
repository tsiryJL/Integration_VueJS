//Responsive
function myFunction(x) {
    if (x.matches) { // si responsive
     MeRemove();
    } else {
      MeAdd();
    }
  }
  var element = document.getElementById("responsive__logo");
  var chart = document.getElementById("responsive__chart");
  var profil = document.getElementById("responsive__profil");
  var card__responsive = document.getElementById("card__responsive");
  var footer = document.getElementById("responsive__footer");

  var x = window.matchMedia("(max-width: 991px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  
  function MeRemove() {
    element.classList.remove("d-none");
    chart.classList.remove("d-none");
    profil.classList.remove("d-none");
    card__responsive.classList.remove("container");
    card__responsive.classList.add("ml-5");
    footer.classList.add("w-100");
    footer.classList.add("mb-5");
  }

  function MeAdd() {
    element.classList.add("d-none");
    chart.classList.add("d-none");
    profil.classList.add("d-none");
    card__responsive.classList.remove("ml-5");
    card__responsive.classList.add("container");
    footer.classList.remove("w-100");
    footer.classList.remove("mb-5");
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
