const blogs = document.querySelectorAll(".blog-beha > div, .blog-mit > div");
const modal = document.querySelector(".blog-modal");
// Definiujemy zapytanie medialne (matchMedia)
// Domyślnie użyjmy progu 1000px, jak w CSS
const mediaQuery = window.matchMedia("(min-width: 1001px)");

// Funkcja obsługująca otwarcie modala, uruchamiana tylko na dużych ekranach
function openModal(blog) {
  // Sprawdzamy, czy ekran jest wystarczająco duży, aby pokazać modal
  if (mediaQuery.matches) {
    modal.innerHTML = `
            <div class="blog-preview">
                <button class="close-btn"><i class="fa-solid fa-xmark"></i></button>
                ${blog.innerHTML}
            </div>`;
    modal.classList.add("active");

    // Blokada scrollowania tła
    document.body.style.overflow = "hidden";
  }
}

// 1. Otwieranie modala - Dodajemy warunek!
blogs.forEach((blog) => {
  blog.addEventListener("click", () => {
    openModal(blog); // Wywołujemy funkcję, która sprawdza rozmiar ekranu
  });
});

// 2. Zamykanie modala (ten fragment działa poprawnie i go zostawiamy)
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.closest(".close-btn")) {
    modal.classList.remove("active");
    modal.innerHTML = "";
    document.body.style.overflow = ""; // Przywrócenie scrolla
  }
});
