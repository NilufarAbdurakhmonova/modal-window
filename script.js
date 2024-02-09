"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");
const closeModalOverlay = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener("click", function () {
    // document.querySelector(".modal")
    modal.classList.remove("hidden");
    // document.querySelector(".overlay")
    overlay.classList.remove("hidden");
  });

btnCloseModal.addEventListener("click", closeModalOverlay);
/* function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});*/

overlay.addEventListener("click", closeModalOverlay);
/*function () {
   modal.classList.add("hidden");
   overlay.classList.add("hidden");
 });*/

/*istalgan tugmani bossa function ishga tushadi*/
// document.addEventListener(
//   "keydown" ,
//   function () {
//     console.log("a key was pressed");
//   }
// );

/*qaysi tugmani bosganimiz osha tugma haqida malumot olish un*/
// document.addEventListener("keydown", function (e) {
//   console.log(e);
// });

//aniq bir tigmani bosganimizda ma'lum bir vazifani bajaradigan qilish un
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModalOverlay();
    }
  }
});
