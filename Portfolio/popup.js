// Function to open popup
function openPopup() {
  document.getElementById("popup-overlay").style.display = "block";
}

// Function to close popup
function closePopup() {
  document.getElementById("popup-overlay").style.display = "none";
}

// Function to handle close button click
document.getElementById("close-popup").addEventListener("click", function() {
  closePopup();
});

// Function to check if the pop-up has been shown before
function checkPopupShown() {
  // Check if the "popupShown" item exists in local storage
  var popupShown = localStorage.getItem("popupShown");
  if (!popupShown) {
    // If the item doesn't exist, show the pop-up
    openPopup();
    // Set an item in local storage to remember that the pop-up has been shown
    localStorage.setItem("popupShown", true);
  }
}

// Open popup only if it hasn't been shown before
window.onload = checkPopupShown;

