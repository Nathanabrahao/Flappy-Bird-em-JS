const valorCano = document.querySelectorAll(".cano")
const passarinho = document.querySelectorAll(".passaro")
const iniciaGame = document.querySelector(".iniciar")
const reinicia = document.querySelector(".reset")



iniciaGame.addEventListener('click', () => {
    valorCano[0].style.left = '0';
    passarinho[0].style.top = '100%';
    iniciaGame.style.display = "none";
    start();
}
)


reinicia.addEventListener('click', () =>{
    reset()
})

function addCano(iniciaGame){
    if(iniciaGame.style.display === "none"){
        
    }
}







