const themeToggleBtn = document.getElementById("theme-toggle");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");
 
const savedTheme = localStorage.getItem("color-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const isDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
 
if (isDark) {
  document.documentElement.classList.add("dark");
  lightIcon.classList.remove("hidden");
  darkIcon.classList.add("hidden");
} else {
  document.documentElement.classList.remove("dark");
  darkIcon.classList.remove("hidden");
  lightIcon.classList.add("hidden");
}
 
themeToggleBtn.addEventListener("click", () => {
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");

  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }
});