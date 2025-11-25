const blogs = document.querySelectorAll(".blog-beha > div, .blog-mit > div");
const modal = document.querySelector(".blog-modal");

blogs.forEach((blog) => {
  blog.addEventListener("click", () => {
    modal.innerHTML = `
      <div class="blog-preview">
        <button class="close-btn"><i class="fa-solid fa-xmark"></i></button>
        ${blog.innerHTML}
      </div>`;
    modal.classList.add("active");

    // blokada scrollowania tła
    document.body.style.overflow = "hidden";
  });
});

// zamykanie po kliknięciu w tło lub w X
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.closest(".close-btn")) {
    modal.classList.remove("active");
    modal.innerHTML = "";
    document.body.style.overflow = ""; // przywrócenie scrolla
  }
});
