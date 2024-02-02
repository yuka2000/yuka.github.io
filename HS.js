//JavaScript for toogle menu
var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function () {
  var saberSound = document.getElementById("saberSound");
  var r2d2Sound = document.getElementById("r2d2Sound");
  var wallSound = document.getElementById("wallSound");

  var saber = document.getElementById("saber");
  var r2d2 = document.getElementById("r2d2");
  var wall = document.getElementById("wall");

  saber.addEventListener("click", function () {
    saberSound.play();

    // Remove the existing animation class to reset it
    saber.style.animation = "none";

    // Apply the rotation animation again
    setTimeout(function () {
      saber.style.animation = "rotateAnimation 1s linear forwards";
    }, 10); // Add a small delay for the animation to apply correctly
  });

  r2d2.addEventListener("click", function () {
    r2d2Sound.play();

    // Remove the existing animation class to reset it
    r2d2.style.animation = "none";

    // Apply the rotation animation again
    setTimeout(function () {
      r2d2.style.animation = "r2d2Movement 1s linear forwards";
    }, 10); // Add a small delay for the animation to apply correctly
  });

  wall.addEventListener("click", function () {
    wallSound.play();

    // Remove the existing animation class to reset it
    wall.style.animation = "none";

    // Apply the rotation animation again
    setTimeout(function () {
      wall.style.animation = "walleMovement 1s linear forwards";
    }, 10); // Add a small delay for the animation to apply correctly
  });
});

// Add a click event to the WhatsApp button
document
  .getElementById("whatsapp-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    var phoneNumber = "+52 4424908282"; 
    var message = "Hello, I'm interested in your services."; 

    // Create the WhatsApp link with the phone number and message
    var whatsappLink =
      "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message);

    // Open a new window or tab with the WhatsApp conversation
    window.open(whatsappLink, "_blank");
});
