const fs = require("fs");
const path = require("path");

const folder = "./assets/images";
const output = "./data/images.json";

fs.readdir(folder, (err, files) => {
  if (err) {
    console.error("Error leyendo carpeta:", err);
    return;
  }

  const images = files
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map(file => `assets/images/${file}`);

  fs.writeFileSync(output, JSON.stringify(images, null, 2));
  console.log("✅ images.json generado automáticamente");
});