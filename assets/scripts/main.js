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

