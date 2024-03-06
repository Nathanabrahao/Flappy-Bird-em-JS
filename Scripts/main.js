const colisao = document.querySelectorAll(".cano")
const passagem = document.querySelectorAll(".passagem")
const passaro = document.querySelectorAll(".passaro")
var jumping = 0;



console.log(e.keycode)


colisao[0].addEventListener('animationiteration', () => {
  const random = -((Math.random() * 800) + 250);
  passagem[0].style.top = random + "px";
});

setInterval(function () {
  const jumpPersonagem = parseInt(window.getComputedStyle(passaro[0]).getPropertyValue("top"));
  if (jumping == 0) {
    passaro[0].style.top = (jumpPersonagem + 3) + "px"
  }
  console.log(jumpPersonagem)
}, 10)


function jump() {
  jumping = 1;
  let jumpCount = 0;
  var jumpInterval = setInterval(function () {
    var jumpPersonagem = parseInt(window.getComputedStyle(passaro[0]).getPropertyValue("top"));
    if (jumpPersonagem > 6)  {
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


