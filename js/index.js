// Configurações Gerais
//variáveis globais 
let contador = 0


function adicionarClicks()
{
    const virarCarta = document.querySelectorAll(".carta")
    const size = virarCarta.length
    for(let i = 0; i < size; i++)
    {
        virarCarta[i].addEventListener("click", function()
        {
            let estado = this.querySelectorAll("div")
            estado[0].classList.add("virado")
            estado[1].classList.add("virado")
            contador++
        })
    }
}


function start()
{
    contador = 0
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
function iniciarJogo(qtd)
{
    let i = 0
    let seletor = document.querySelector(".jogo")
    let div = ""
    while(i < qtd)
    {
        div += `
        <div class="carta">
            <div class="front-face">
                <img src="img/front.png" alt="" srcset="">
            </div>
            <div class="back-face">
                <img src="img/revertitparrot.gif" alt="" srcset="">
            </div>
        </div>
    `

        i++
    }
    seletor.innerHTML = div
    adicionarClicks()
    

}



function fimDoJogo()
{
    alert(`Você ganhou em ${contador/2} jogadas!`)
    function reiniciar()
    {
        let escolha = prompt(`Você gostaria de jogar novamente?
    sim ou não`)
        if (escolha == "sim")
            start()
        else if (escolha == "não")
            alert("Então, tchau!")
    }
    reiniciar()
    
}
iniciarJogo(3)