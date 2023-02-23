
var currentSectionId = sessionStorage.getItem("sectionId");
const anchors = document.querySelectorAll(".go-to-target-section");

anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const dataSection = this.getAttribute("data-section"); 
    sessionStorage.setItem("sectionId",dataSection);
  });
});


document.addEventListener("DOMContentLoaded", function () { 
  var currentSectionId = sessionStorage.getItem("sectionId");
  if (currentSectionId !== null) {
    const targetSection = document.getElementById(currentSectionId);
    targetSection.scrollIntoView({ behavior: "smooth" }); // Handle the navigation yourself
    currentSectionId = null;
    sessionStorage.setItem("sectionId",null);
  }

});
