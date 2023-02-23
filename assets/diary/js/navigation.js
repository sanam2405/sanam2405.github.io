
var currentSectionId = sessionStorage.getItem("sectionId");
const anchors = document.querySelectorAll(".go-to-target-section");

anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    const dataSection = this.getAttribute("data-section"); 
    sessionStorage.setItem("sectionId",dataSection);
  });
});


// window.onload = function() {
//   currentSectionId = sessionStorage.getItem("sectionId");
//   if(currentSectionId === null) {
//     // DO-NOTHING
//   } else {
//     const targetSection = document.getElementById(currentSectionId);
//     targetSection.scrollIntoView({ behavior: "smooth" }); // Handle the navigation yourself  
//   }
// }

// window.onload = function() {
//   const currentSectionId = sessionStorage.getItem("sectionId");
//   console.log(currentSectionId);
//   if (currentSectionId !== null) {
//     const targetSection = document.getElementById(currentSectionId);
//     targetSection.scrollIntoView({ behavior: "smooth" }); // Handle the navigation yourself
//   }
// }


document.addEventListener("DOMContentLoaded", function () { 
  const currentSectionId = sessionStorage.getItem("sectionId");
  console.log(currentSectionId);
  if (currentSectionId !== null) {
    const targetSection = document.getElementById(currentSectionId);
    targetSection.scrollIntoView({ behavior: "smooth" }); // Handle the navigation yourself
  }

});
