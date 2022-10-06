$(function () {
   var floorPath = $(".home-image path");
   var counterUp = $(".counter-up");
   var counterDown = $(".counter-down");
   var currentFloor = 2;

   floorPath.on("mouseover", function () {
      currentFloor = $(this).attr("data-floor");
      floorPath.removeClass("current-floor");
      $(".counter").text(currentFloor);
   });

   function addAndRemoveClass() {
      floorPath.removeClass("current-floor");
      $(`[data-floor=${currentFloor}]`).toggleClass("current-floor");
   }

   counterUp.on("click", function () {
      if (currentFloor < 18) {
         currentFloor++;
         $(".counter").text(currentFloor);
         addAndRemoveClass();
      }
   });

   counterDown.on("click", function () {
      if (currentFloor > 2) {
         currentFloor--;
         $(".counter").text(currentFloor);
         addAndRemoveClass();
      }
   });
});

// const floorPath = document.querySelectorAll(".home-image path");
// const counter = document.querySelector(".counter");
// const counterUp = document.querySelector(".counter-up");
// const counterDown = document.querySelector(".counter-down");

// floorPath.forEach((item) => {
//    item.addEventListener("mouseover", function () {
//       var currentFloor = this.dataset.floor;
//       counter.innerHTML = currentFloor;

//       counterUp.addEventListener("click", () => {
//          if (currentFloor < 18) {
//             currentFloor++;
//             counter.innerHTML = currentFloor;
//          }
//       });

//       counterDown.addEventListener("click", () => {
//          if (currentFloor > 2) {
//             currentFloor--;
//             counter.innerHTML = currentFloor;
//          }
//       });
//    });
// });
