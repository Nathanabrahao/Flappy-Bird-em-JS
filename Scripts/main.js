const valorCano = document.querySelectorAll(".cano")
const passarinho = document.querySelectorAll(".passaro")
const iniciaGame = document.querySelector(".iniciar")



console.log(valorCano)
console.log(passarinho)
console.log(iniciaGame)




iniciaGame.addEventListener('click', () => {
    valorCano[0].style.left = '0';
    passarinho[0].style.top = '100%';
    iniciaGame.style.display = "none";
}
)

function addCano(iniciaGame){
    if(iniciaGame.style.display === "none"){
        
    }
}

