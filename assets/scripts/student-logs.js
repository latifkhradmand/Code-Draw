import "";

const htmlElement = document.documentElement;
htmlElement.classList.toggle("dark", JSON.parse(localStorage.getItem("theme")) === "dark",);

// login and sign up bobles switching
const loginBoble = document.getElementById("login-boble");
const signUpBoble = document.getElementById("sign-up-boble");
const loginBobleBtn = document.getElementById("login-boble-btn");
const signUpBobleBtn = document.getElementById("sign-up-boble-btn");

loginBobleBtn.addEventListener("click", () => {
  loginBoble.classList.remove("absolute");
  loginBoble.classList.remove("-translate-x-full");
  signUpBoble.classList.add("absolute");
  signUpBoble.classList.add("-translate-x-full");
  loginBoble.style.transition = "all .5s ease-in-out";
  loginBoble.classList.replace("hidden", "flex");
  loginBobleBtn.classList.add("btn-secondary");
  signUpBobleBtn.classList.remove("btn-secondary");
});

signUpBobleBtn.addEventListener("click", () => {
  loginBoble.classList.add("absolute");
  loginBoble.classList.add("-translate-x-full");
  signUpBoble.classList.remove("absolute");
  signUpBoble.classList.remove("-translate-x-full");
  signUpBoble.style.transition = "all .5s ease-in-out";
  signUpBobleBtn.classList.add("btn-secondary");
  loginBobleBtn.classList.remove("btn-secondary");
});



