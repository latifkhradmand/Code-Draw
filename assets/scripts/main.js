// the switch theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');
let themeToggleIcon = themeToggleBtn.querySelector('i'); // Assuming the icon is an <i> element with class 'fas'
const htmlElement = document.documentElement; 
const mobileMenuToggleBtn = document.getElementById('mobile-theme-toggle');
const MobilethemeToggleIcon = mobileMenuToggleBtn.querySelector('i');



function applyTheme() {
  // localStorage.setItem('theme', JSON.stringify(htmlElement.classList.contains('dark') ? "light" : "dark"));
  if (localStorage.getItem('theme')) {
    if (JSON.parse(localStorage.getItem('theme')) === "light") {
      htmlElement.classList.add('dark');
      themeToggleIcon.classList.remove('fa-moon');
      themeToggleIcon.classList.add('fa-sun');
      MobilethemeToggleIcon.classList.remove("fa-moon");
      MobilethemeToggleIcon.classList.add("fa-sun");
      localStorage.setItem('theme', JSON.stringify("dark"));
    } else {
      htmlElement.classList.remove('dark');
      themeToggleIcon.classList.remove('fa-sun');
      themeToggleIcon.classList.add('fa-moon');
      MobilethemeToggleIcon.classList.remove("fa-sun");
      MobilethemeToggleIcon.classList.add("fa-moon");
      localStorage.setItem('theme', JSON.stringify("light"));
    }
  }else {
    localStorage.setItem('theme', JSON.stringify("dark"));
  }
}
htmlElement.classList.toggle('dark', JSON.parse(localStorage.getItem('theme')) === "dark");
htmlElement.classList.contains('dark') ? themeToggleIcon.classList.replace('fa-moon', 'fa-sun') : themeToggleIcon.classList.replace('fa-sun', 'fa-moon');
htmlElement.classList.contains('dark') ? MobilethemeToggleIcon.classList.replace('fa-moon', 'fa-sun') : MobilethemeToggleIcon.classList.replace('fa-sun', 'fa-moon');

themeToggleBtn.addEventListener('click', () => {
  applyTheme();
});

// the mobile menu toggle button
mobileMenuToggleBtn.addEventListener('click', () => {
    applyTheme();
});


// the mobile sidebar toggle button
const mobileSidebarToggleBtn = document.getElementById("sidebar-button");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const sidebarLinks = document.querySelectorAll(".sidebar-links li");

mobileSidebarToggleBtn.addEventListener("click", (e) => {
  sidebar.classList.toggle("-translate-x-52");
  sidebar.style.transition = "all .5s ease-in-out";
  sidebarOverlay.classList.toggle("hidden");
});

// Close the sidebar when a link is clicked
sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-52");
    sidebarOverlay.classList.add("hidden");
  });
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !mobileSidebarToggleBtn.contains(e.target)) {
    sidebar.classList.add("-translate-x-52");
    sidebarOverlay.classList.add("hidden");
  }
});

