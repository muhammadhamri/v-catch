// var level2 = document.getElementById("alertLowerLevel2");
// var level2Button = document.getElementsByClassName("level2")[0];

// level2Button.addEventListener("click", function () {
//   level2.style.display = "block";
// });

// function alertLevel() {
//   var level2 = document.getElementById("alertLowerLevel2");
//   var level2Button = document.getElementsByClassName("level2")[0];

//   if (level2Button.checked) {
//     showPopup("alertLowerLevel2");
//   }
// }

// function showPopup(popupId) {
//   var popup = document.getElementById(popupId);
//   popup.style.display = "block";
//   setTimeout(function () {
//     popup.style.display = "none";
//   }, 2500); // Pop-up akan disembunyikan setelah 1 detik
// }

document.getElementById("level2Link").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default behavior of the link

  showPopup("alertLowerLevel2");
});

function showPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
  setTimeout(function () {
    popup.style.display = "none";
  }, 2500);
}

alertLevel();

function showPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = "block";
  setTimeout(function () {
    popup.style.display = "none";
  }, 2500);
}

alertLevel();
