const profileButton = document.getElementById("profile-btn");
const profileMenu = document.getElementById("profile");
const contentChart = document.getElementById("content");

profileButton.addEventListener("click", () => {
  profileMenu.classList.toggle("hidden");
  console.log("object")

  contentChart.classList.toggle("hidden");
});