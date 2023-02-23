
var currentSectionId = localStorage.getItem("sectionId");
const anchors = document.querySelectorAll(".go-to-target-section");

anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const dataSection = this.getAttribute("data-section"); 
    localStorage.setItem("sectionId",dataSection);
  });
});


window.onload = function() {
  currentSectionId = localStorage.getItem("sectionId");
  if(currentSectionId === null) {
    // DO-NOTHING
  } else {
    const targetSection = document.getElementById(currentSectionId);
    targetSection.scrollIntoView({ behavior: "smooth" }); // Handle the navigation yourself  
  }
}
