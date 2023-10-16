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
$(function() {

var origTitle, animatedTitle, timer;

function animateTitle(newTitle) {
  var currentState = false;
  origTitle = document.title;  // save original title
  animatedTitle = "Hey There! " + origTitle;
  timer = setInterval(startAnimation, 2000);

  function startAnimation() {
    // animate between the original and the new title
    document.title = currentState ? origTitle : animatedTitle;
    currentState = !currentState;
  }
}

function restoreTitle() {
  clearInterval(timer);
  document.title = origTitle; // restore original title
}

// Change page title on blur
$(window).blur(function() {
    animateTitle();
});

// Change page title back on focus
$(window).focus(function() {
    restoreTitle();
});

});
