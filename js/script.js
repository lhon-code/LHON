const grid = document.getElementById("grid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

async function loadImages() {
  try {
    console.log("Cargando imágenes...");

    const res = await fetch("./data/images.json");
    console.log("Respuesta fetch:", res);

    const images = await res.json();
    console.log("Imágenes:", images);

    const shuffled = images.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 9);

    selected.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;

      // Delay aleatorio (clave para que se vea orgánico)
      const delay = Math.random() * 300;

      img.onload = () => {
        img.classList.add("loaded");
      };

      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = src;
      });

      grid.appendChild(img);
    });

  } catch (error) {
    console.error("ERROR TOTAL:", error);
  }
}

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

loadImages();