const colisao = document.querySelectorAll(".cano")
const passagem = document.querySelectorAll(".passagem")
const passaro = document.querySelectorAll(".passaro")
const restart = document.querySelectorAll(".restart")
const reseta = document.querySelector(".restart")
const gameOver = document.querySelectorAll(".perdeu")
const placar = document.getElementById("placar");
const start = document.getElementById("iniciar")
const startButton = document.querySelectorAll(".iniciar")
const pontuacao = JSON.parse(localStorage.getItem("pontoMaximo")) || [];
var pontos = 0;
var pontoMaximo = 0;
var jumping = 0;


resultadoPlacar()
preCarregamento()

start.addEventListener("click", () => {
  iniciaGame();
})



console.log(passaro)




function jump() {
  jumping = 1;
  let jumpCount = 0;
  var jumpInterval = setInterval(function () {
    var jumpPersonagem = parseInt(window.getComputedStyle(passaro[0]).getPropertyValue("top"));
    if (jumpPersonagem > 6) {
      passaro[0].style.top = (jumpPersonagem - 5) + "px"
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval)
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10)
}

function iniciaGame() {
  imagemRestart();
  colisao[0].addEventListener('animationiteration', () => {
    const random = -((Math.random() * 800) + 250);
    passagem[0].style.top = random + "px";
    pontos++
  });

  setInterval(function () {
    const jumpPersonagem = parseInt(window.getComputedStyle(passaro[0]).getPropertyValue("top"));
    if (jumping == 0) {
      passaro[0].style.top = (jumpPersonagem + 3) + "px"
    }
    if (jumpPersonagem > 1010) {
      resultadoPlacar()
      restartGame()
    }
  }, 10)

}


function preCarregamento(){
  colisao[0].style.display = "none"
  passaro[0].style.display = "none"
  passagem[0].style.display = "none"
}


function imagemRestart(){
  colisao[0].style.display = ""
  passaro[0].style.display = ""
  passagem[0].style.display = ""
  startButton[0].style.display = "none"
  
}



function restartGame() {
  gameOver[0].style.display = "inline"
  restart[0].style.display = "inline"
  passagem[0].style.display = "none"
  colisao[0].style.display = "none"
  passaro[0].style.display = "none"
  // reseta.addEventListener('click', () => {
  // });
}

function somaPontos(pontos) {
  if (pontos > pontoMaximo) {
    pontoMaximo = pontos
  }
  
}



function resultadoPlacar() {
  placar.innerHTML = `<p>Melhor pontuação: ${pontoMaximo} | Pontuação atual: ${pontos}</p>`
}
