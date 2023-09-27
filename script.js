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

//audio

// const backsound = document.getElementById("backsound");
// const sound = document.getElementById("sound");

// // Menambahkan event listener untuk memainkan audio setelah klik pertama
// sound.addEventListener("click", function () {
//   backsound.play();
//   // Hapus event listener agar tidak memainkan ulang setiap kali ada klik
//   sound.removeEventListener("click", arguments.callee);
// });

const backsound = document.getElementById("backsound");
const sound = document.getElementById("sound");

// Membuat fungsi yang akan dijalankan saat elemen diklik
function playAudio() {
  backsound.play();
  // Hapus event listener agar tidak memainkan ulang setiap kali ada klik
  // sound.removeEventListener("click", playAudio);
}

// Menambahkan event listener untuk memanggil fungsi saat elemen diklik
sound.addEventListener("click", playAudio);
