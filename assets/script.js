const themeToggleBtn = document.getElementById("theme-toggle");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");

// 1. Afficher la bonne icône au chargement
if (document.documentElement.classList.contains("dark")) {
  lightIcon.classList.remove("hidden");
} else {
  darkIcon.classList.remove("hidden");
}

// 2. Écouter le clic sur le bouton
themeToggleBtn.addEventListener("click", () => {
  // On bascule l'icône visible
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");

  // Si on est déjà en mode sombre, on passe en clair
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }
});
