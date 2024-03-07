const colisao = document.getElementById("colisao")
const passagem = document.getElementById("passagem")
const passaro = document.querySelectorAll(".passaro")

const start = document.getElementById("iniciar")
const startButton = document.querySelectorAll(".iniciar")
const gameOver = document.querySelectorAll(".perdeu")
const restart = document.querySelectorAll(".restart")
const reseta = document.getElementById("restart")

let pontoMaximo = localStorage.getItem("pontoMaximo") || 0;
let pontuacaoMaxima = localStorage.getItem("pontuacaoMaxima") || 0;
var pontos = 0;


preCarregamento()


start.addEventListener("click", () => {
  iniciaGame();
})


function iniciaGame() {
  somaPontos()
  resultadoPlacar()
  imagemRestart();


  colisao.addEventListener('animationiteration', () => {
    const random = -((Math.random() * 800) + 250);
    passagem.style.top = random + "px";
    pontos++
  });

  setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(passaro[0]).getPropertyValue("top"));
    if (jumping == 0) {
      passaro[0].style.top = (characterTop + 3) + "px";
    }
    var blockLeft = parseInt(window.getComputedStyle(colisao).getPropertyValue("left"));
    var holeTop = parseInt(window.getComputedStyle(passagem).getPropertyValue("top"));
    var cTop = -(500 - characterTop);
    if ((characterTop > 1100) || ((blockLeft < 150) && (blockLeft > -200) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
      resultadoPlacar()
      restartGame()
      reseta.addEventListener('click', () => {
        location.reload(true);
      })
      passaro[0].style.top = 100 + "px";
      counter = 0;
    }
  }, 10);
}

function jump() {
  jumping = 1;
  let jumpCount = 0;
  var jumpInterval = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(passaro[0]).getPropertyValue("top"));
    if ((characterTop > 6) && (jumpCount < 15)) {
      passaro[0].style.top = (characterTop - 5) + "px"
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval)
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
    if ((characterTop > 1100)) {
      jumping = 1;
      jumpCount = 0;
    }
  }, 10)

}


function preCarregamento() {
  colisao.style.backgroundColor = "transparent"
  passagem.style.backgroundColor = "transparent"

  passaro[0].style.display = "none"
}


function somaPontos() {
  if (pontoMaximo < pontos) {
    pontoMaximo = pontos;
    pontuacaoMaxima = pontoMaximo
  }
  pontos = 0
}

function resultadoPlacar() {
  placar.innerHTML = `<p>Melhor pontuação: ${pontuacaoMaxima} | Pontuação atual: ${pontos}</p>`
}



function imagemRestart() {
  colisao.style.backgroundColor = "var(--verde)";
  passagem.style.backgroundColor = "var(--azul)"

  startButton[0].style.display = "none"
  gameOver[0].style.display = "none"
  restart[0].style.display = "none"

  passaro[0].style.display = ''
  passaro[0].style.top = 500 + "px";
  pontos = 0;

}


function restartGame() {
  gameOver[0].style.display = "inline"
  restart[0].style.display = "inline"
  colisao.style.backgroundColor = "transparent"
  passagem.style.backgroundColor = "transparent"
  passaro[0].style.display = "none"
}