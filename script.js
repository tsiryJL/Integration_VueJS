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
