const valorCano = document.querySelectorAll(".cano");
const passarinho = document.querySelectorAll(".passaro");
const iniciaGame = document.querySelector(".iniciar");
const reinicia = document.querySelector(".reset");
const somaCanos = document.querySelector(".canos")


iniciaGame.addEventListener("click", () => {
  valorCano[0].style.left = "0";
  passarinho[0].style.top = "100%";
  iniciaGame.style.display = "none";
  start();
  addCano(canos);
});



reinicia.addEventListener("click", () => {
  reset();
});



function addCano(iniciaGame) {
  if (iniciaGame.style.display === "none") {
    document.canos.innerHTML = `<img src="./img/super-mario-brothers-147465_960_720.jpg" alt="cano2" class="cano2">`;
  }
}


