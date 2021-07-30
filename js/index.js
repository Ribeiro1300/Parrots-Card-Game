// Configurações Gerais
//variáveis globais 
let contador = 0
let ultimaCarta = ""
let ultimaDiv
const arrayGifs = ["img/bobrossparrot.gif", "img/bobrossparrot.gif", "img/metalparrot.gif", "img/metalparrot.gif", "img/tripletsparrot.gif", "img/tripletsparrot.gif", "img/fiesparrot.gif", "img/fiesparrot.gif", "img/explodyparrot.gif", "img/explodyparrot.gif", "img/revertitparrot.gif", "img/revertitparrot.gif", "img/unicornparrot.gif", "img/unicornparrot.gif"]

function verificarCartas(elemento)
{
    let cartaSelecionada = elemento.querySelector("img")
    let imagem = cartaSelecionada.getAttribute("src")
    if (ultimaCarta == "")
    {
        ultimaCarta = imagem
        ultimaDiv = elemento
    }
    else
    {
        if (ultimaCarta != imagem)
        {
            setTimeout(function(){
                let div1 = elemento.querySelectorAll("div")
                let div2 = ultimaDiv.querySelectorAll("div")
                div1[0].classList.remove("virado")
                div1[1].classList.remove("virado")
                div2[0].classList.remove("virado")
                div2[1].classList.remove("virado")
                ultimaCarta = ""
                ultimaDiv = null
            }, 500)
            
        }
        
    }
    
}
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
    let arrayMisturado = arrayGifs.slice(0,(qtd))
    console.log(arrayMisturado);
    arrayMisturado.sort(function comparador() { 
        return Math.random() - 0.5; 
    })
    for (let i = 0; i < qtd; i++)
    {
        let gif = arrayMisturado[i]
        div += `
        <div class="carta" onclick = "verificarCartas(this)">
            <div class="front-face">
                <img src="img/front.png" alt="" srcset="">
            </div>
            <div class="back-face">
                <img src=${gif} alt="" srcset="">
            </div>
        </div>
    `

    }
    seletor.innerHTML = div
    adicionarClicks()
    

}

function fimDoJogo()
{
    alert(`Você ganhou em ${contador/2} jogadas!`)
    function reiniciar()//caso eu queira implementar opção de limite de tempo
    {
        let escolha = prompt(`Você gostaria de jogar novamente?
    sim ou não`)
        if (escolha == "sim")
            location.reload()
        else if (escolha == "não")
            alert("Então, tchau!")
    }
    reiniciar()
    
}
iniciarJogo(6)
