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


(function() {
  var classes, count, d, range, updateStars;

  d = document;

  range = d.querySelector('#star-rating');

  count = d.querySelector('#star-count');

  classes = d.querySelector('#stars').classList;

  updateStars = function(event) {
    var formattedVal, val;
    val = this.value || 0;
    //formattedVal = val.toString().replace('.', '-');
    //Change Value
    formattedVal = 5;
    while (classes.length > 1) {
      classes.remove(classes.item(1));
    }
    //count.innerHTML = val;
    return classes.add('stars-' + formattedVal);
  };

  range.addEventListener('change', updateStars);

  updateStars();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLE9BQUEsRUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQTs7RUFBQSxDQUFBLEdBQUk7O0VBQ0osS0FBQSxHQUFRLENBQUMsQ0FBQyxhQUFGLENBQWdCLGNBQWhCOztFQUNSLEtBQUEsR0FBUSxDQUFDLENBQUMsYUFBRixDQUFnQixhQUFoQjs7RUFDUixPQUFBLEdBQVUsQ0FBQyxDQUFDLGFBQUYsQ0FBZ0IsUUFBaEIsQ0FBeUIsQ0FBQzs7RUFFcEMsV0FBQSxHQUFjLFFBQUEsQ0FBQyxLQUFELENBQUE7QUFDZCxRQUFBLFlBQUEsRUFBQTtJQUFFLEdBQUEsR0FBTSxJQUFDLENBQUEsS0FBRCxJQUFVO0lBQ2hCLFlBQUEsR0FBZSxHQUFHLENBQUMsUUFBSixDQUFBLENBQWMsQ0FBQyxPQUFmLENBQXVCLEdBQXZCLEVBQTRCLEdBQTVCO0FBRWYsV0FBTSxPQUFPLENBQUMsTUFBUixHQUFpQixDQUF2QjtNQUNFLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBTyxDQUFDLElBQVIsQ0FBYSxDQUFiLENBQWY7SUFERjtJQUdBLEtBQUssQ0FBQyxTQUFOLEdBQWtCO1dBQ2xCLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBQSxHQUFXLFlBQXZCO0VBUlk7O0VBVWQsS0FBSyxDQUFDLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDLFdBQWpDOztFQUNHO0FBaEJIIiwic291cmNlc0NvbnRlbnQiOlsiZCA9IGRvY3VtZW50XG5yYW5nZSA9IGQucXVlcnlTZWxlY3RvcignI3N0YXItcmF0aW5nJylcbmNvdW50ID0gZC5xdWVyeVNlbGVjdG9yKCcjc3Rhci1jb3VudCcpXG5jbGFzc2VzID0gZC5xdWVyeVNlbGVjdG9yKCcjc3RhcnMnKS5jbGFzc0xpc3RcbiAgXG51cGRhdGVTdGFycyA9IChldmVudCkgLT5cbiAgdmFsID0gQHZhbHVlIG9yIDBcbiAgZm9ybWF0dGVkVmFsID0gdmFsLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICctJylcbiAgXG4gIHdoaWxlIGNsYXNzZXMubGVuZ3RoID4gMVxuICAgIGNsYXNzZXMucmVtb3ZlKGNsYXNzZXMuaXRlbSgxKSlcbiAgXG4gIGNvdW50LmlubmVySFRNTCA9IHZhbFxuICBjbGFzc2VzLmFkZCgnc3RhcnMtJyArIGZvcm1hdHRlZFZhbClcbiAgXG5yYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVTdGFycylcbmRvIHVwZGF0ZVN0YXJzIl19
//# sourceURL=coffeescript