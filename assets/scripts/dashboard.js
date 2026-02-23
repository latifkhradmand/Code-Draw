const reportButton = document.getElementById("report");
const profileMenu = document.getElementById("profile");
const contentChart = document.getElementById("content");

reportButton.addEventListener("click", (e) => {
  e.preventDefault();
  profileMenu.classList.toggle("hidden");
  contentChart.classList.toggle("hidden");
});