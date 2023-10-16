document.addEventListener("DOMContentLoaded", function() {
  var fadeInElements = document.querySelectorAll(".fade-in");
  var windowHeight = window.innerHeight;

  function checkPosition() {
    fadeInElements.forEach(function(element) {
      var elementPositionFromTop = element.getBoundingClientRect().top;

      if (elementPositionFromTop - windowHeight <= 0) {
        element.classList.add("in-view");
        element.classList.remove("out-view");
      } else {
        if  (element.className == "out-view") {
          console.log("sussy");
        } else {
          element.classList.add("out-view");
          element.classList.remove("in-view");
        };
      };
    });
  };
  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", checkPosition);

  checkPosition();
});