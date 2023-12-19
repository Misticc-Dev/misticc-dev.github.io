document.body.style = "background-color: var(--bs-dark);transition: 0.5s;"
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

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
        if (element.className == "out-view") {
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



container.addEventListener("click", setTheme);
function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      localStorage.setItem("Theme", "light");
      break;
    case "light":
      setDark();
      theme = "dark";
      localStorage.setItem("Theme", "dark");
      break;
  }
}

body.onload = check()

function setLight() {
  root.style.setProperty(
    "--bs-dark",
    "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
  );
  root.style.setProperty("--amogus", "#121212");
  container.classList.remove("shadow-dark");
  setTimeout(() => {
    container.classList.add("shadow-light");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = sun;
}
function setDark() {
  root.style.setProperty("--bs-dark", "#121212");
  root.style.setProperty("--amogus", "white");
  container.classList.remove("shadow-light");
  setTimeout(() => {
    container.classList.add("shadow-dark");
    themeIcon.classList.remove("change");
  }, 300);
  themeIcon.classList.add("change");
  themeIcon.src = moon;
}

function check() {
  if (localStorage.getItem("Theme") == "dark") {
    setDark();
  } else if (localStorage.getItem("Theme") == "light") {
    setLight();
  } else {
    setDark();
  }
}
