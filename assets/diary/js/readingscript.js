function addReadingColor() {
  document.querySelector("body").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("body").style.backgroundColor = "rgb(255, 255, 191)";
  document.querySelector("#page-wrapper").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("#page-wrapper").style.backgroundColor =
    "rgb(255, 255, 191)";
  document.querySelector("#header").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("#header").style.backgroundColor =
    "rgb(255, 255, 191)";
  document.querySelector("#main").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("#main").style.backgroundColor = "rgb(255, 255, 191)";
  document.querySelector("form").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("form").style.backgroundColor = "rgb(255, 255, 191)";
  document.querySelector("textarea").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("textarea").style.backgroundColor =
    "rgb(255, 255, 191)";

  const containerElements = document.querySelectorAll(".container");
  containerElements.forEach(function (element) {
    element.style.transition = "background-color 3s ease-in-out";
    element.style.background = "rgb(255, 255, 191)";
  });

  const inputElements = document.querySelectorAll("input");
  inputElements.forEach(function (element) {
    element.style.transition = "background-color 3s ease-in-out";
    element.style.background = "rgb(255, 255, 191)";
  });

  const mainElements = document.querySelectorAll("#main");
  mainElements.forEach(function (element) {
    element.style.transition = "background-color 3s ease-in-out";
    element.style.background = "rgb(255, 255, 191)";
  });

  document.querySelector("#footer").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("#footer").style.backgroundColor =
    "rgb(255, 255, 191)";

  if (window.location.href.includes("diary")) {
    document.getElementById("canvas").style.transition =
      "background-color 3s ease-in-out";
    document.getElementById("canvas").style.backgroundColor =
      "rgb(255, 255, 191)";
  }
}

function removeReadingColor() {
  document.querySelector("body").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("body").style.backgroundColor = "rgb(255, 255, 255)";
  document.querySelector("#page-wrapper").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("#page-wrapper").style.backgroundColor =
    "rgb(255, 255, 255)";
  document.querySelector("#header").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("#header").style.backgroundColor =
    "rgb(255, 255, 255)";
  document.querySelector("#main").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("#main").style.backgroundColor = "rgb(255, 255, 255)";
  document.querySelector("form").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("form").style.backgroundColor = "rgb(255, 255, 255)";
  document.querySelector("textarea").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("textarea").style.backgroundColor =
    "rgb(255, 255, 255)";

  const containerElements = document.querySelectorAll(".container");
  containerElements.forEach(function (element) {
    element.style.transition = "background-color 3s ease-in-out";
    element.style.background = "rgb(255, 255, 255)";
  });

  const inputElements = document.querySelectorAll("input");
  inputElements.forEach(function (element) {
    element.style.transition = "background-color 3s ease-in-out";
    element.style.background = "rgb(255, 255, 255)";
  });

  const mainElements = document.querySelectorAll("#main");
  mainElements.forEach(function (element) {
    element.style.transition = "background-color 3s ease-in-out";
    element.style.background = "rgb(255, 255, 255)";
  });

  document.querySelector("#footer").style.transition =
    "background-color 3s ease-in-out";
  document.querySelector("#footer").style.backgroundColor =
    "rgb(255, 255, 255)";

  if (window.location.href.includes("diary")) {
    document.getElementById("canvas").style.transition =
      "background-color 3s ease-in-out";
    document.getElementById("canvas").style.backgroundColor =
      "rgb(255, 255, 255)";
  }
}

const wrapper = document.querySelector(".wrapper");
const hideCheckbox = document.querySelector("#hide-checkbox");
var currentState = sessionStorage.getItem("hideCheckboxState");

document.addEventListener("DOMContentLoaded", function () {

  if (currentState === null) {
    currentState = "false";
    sessionStorage.setItem("hideCheckboxState", currentState);
  }

  // Check local storage for previous state of checkbox
  if (currentState === "true") {
    hideCheckbox.checked = true;
    addReadingColor();
  } else {
    hideCheckbox.checked = false;
    removeReadingColor();
  }
});

// Handle checkbox change event
wrapper.addEventListener("change", function (e) {
  if (e.target === hideCheckbox) {
    if (e.target.checked) {
      addReadingColor();
      currentState = "true";
      sessionStorage.setItem("hideCheckboxState", currentState); // Save state to local storage
    } else {
      removeReadingColor();
      currentState = "false";
      sessionStorage.setItem("hideCheckboxState", currentState); // Remove state from local storage
    }
  }
});
