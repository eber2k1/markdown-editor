tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {

        }
    }
}

  const themeToggle = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");
  const html = document.documentElement;
  
  // Función para actualizar iconos
  function updateIcons() {
      if (html.classList.contains("dark")) {
          darkIcon.classList.remove("hidden");
          lightIcon.classList.add("hidden");
      } else {
          darkIcon.classList.add("hidden");
          lightIcon.classList.remove("hidden");
      }
  }
  
  // Función para alternar tema
  function toggleTheme() {
      if (html.classList.contains("dark")) {
          html.classList.remove("dark");
          localStorage.setItem("theme", "light");
      } else {
          html.classList.add("dark");
          localStorage.setItem("theme", "dark");
      }
      updateIcons();
  }
  
  // Aplicar el tema guardado en localStorage
  if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
  } 
  updateIcons(); // Ajusta los iconos al cargar
  
  // Evento de clic para cambiar el tema
  themeToggle.addEventListener("click", toggleTheme);