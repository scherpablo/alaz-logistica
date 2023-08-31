// Obtén elementos relevantes
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.getElementsByClassName("close")[0];
    const galleryImages = document.querySelectorAll(".galleryContent img");
  
    // Agrega eventos de clic a cada imagen de la galería
    galleryImages.forEach((img) => {
      img.addEventListener("click", (e) => {
        modal.style.display = "block";
        modalImg.src = e.target.src;
      });
    });
  
    // Cierra la ventana modal cuando se hace clic en el botón de cierre
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Cierra la ventana modal cuando se hace clic fuera de la imagen
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  
