document.getElementById("theme-toggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");

  // збереження вибору в LocalStorage
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// завантаження теми при відкритті сторінки
window.onload = function() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
};
