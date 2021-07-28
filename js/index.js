// Configurações Gerais

const virarCarta = document.querySelectorAll(".carta")
const size = virarCarta.length
for(let i = 0; i < size; i++)
{
    virarCarta[i].addEventListener("click", function()
    {
        let estado = this.querySelectorAll("div")
        estado[0].classList.add("virado")
        estado[1].classList.add("virado")
    })
}

function start()
{
    let qtdCartas = prompt(`Quantas cartas você quer?
OBS: Apenas números pares entre 4 e 14`)
    let par = qtdCartas % 2
    if (par == 0 && qtdCartas >= 4 && qtdCartas <= 14 )
    {
        iniciarJogo(qtdCartas)
    }
    else
    {
        alert("Valor inválido, digite novamente")
        start()
    }
}
function iniciarJogo()
{
    
    

}



function fimDoJogo()
{
    alert("Você ganhou em X jogadas!")
    function reiniciar()
    {
        let escolha = prompt(`Você gostaria de jogar novamente?
    sim ou não`)
        if (escolha == "sim")
            start()
        else if (escolha == "não")
            window.close
    }
    reiniciar()
    
}
iniciarJogo()