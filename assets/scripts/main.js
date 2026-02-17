// the switch theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');
let themeToggleIcon = themeToggleBtn.querySelector('i'); // Assuming the icon is an <i> element with class 'fas'
const htmlElement = document.documentElement; 

themeToggleBtn.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
  if (htmlElement.classList.contains('dark')) {
    themeToggleIcon.classList.remove('fa-moon');
    themeToggleIcon.classList.add('fa-sun'); // Change to sun icon for dark mode
    MobilethemeToggleIcon.classList.remove("fa-moon");
    MobilethemeToggleIcon.classList.add("fa-sun");
  } else {
    themeToggleIcon.classList.remove('fa-sun');
    themeToggleIcon.classList.add('fa-moon'); // Change back to moon icon for light mode
    MobilethemeToggleIcon.classList.remove("fa-sun");
    MobilethemeToggleIcon.classList.add("fa-moon");
  }
});


// the mobile menu toggle button
const mobileMenuToggleBtn = document.getElementById('mobile-theme-toggle');
const MobilethemeToggleIcon = mobileMenuToggleBtn.querySelector('i');

mobileMenuToggleBtn.addEventListener('click', () => {
  htmlElement.classList.toggle("dark");
  if (htmlElement.classList.contains("dark")) {
    themeToggleIcon.classList.remove("fa-moon");
    themeToggleIcon.classList.add("fa-sun"); // Change to sun icon for dark mode
    MobilethemeToggleIcon.classList.remove("fa-moon");
    MobilethemeToggleIcon.classList.add("fa-sun"); // Change to sun icon for dark mode
  } else {
    MobilethemeToggleIcon.classList.remove("fa-sun");
    MobilethemeToggleIcon.classList.add("fa-moon"); // Change back to moon icon for light mode
    themeToggleIcon.classList.remove("fa-sun");
    themeToggleIcon.classList.add("fa-moon"); // Change back to moon icon for light mode
  }
});


// the mobile sidebar toggle button
const mobileSidebarToggleBtn = document.getElementById("sidebar-button");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");

mobileSidebarToggleBtn.addEventListener("click", () => {
  // sidebar.classList.toggle("translate-x-0");
  sidebar.classList.toggle("-translate-x-52");
  sidebar.style.transition = "all .5s ease-in-out";
  sidebarOverlay.classList.toggle("hidden");
  // sidebar.classList.toggle("hidden");
  // sidebarOverlay.classList.toggle("pointer-events-none");
});


