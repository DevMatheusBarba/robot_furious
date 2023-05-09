const controle = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "braco": {

        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5,
    },
    "blindagem": {

        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20,
    },
    "nucleo": {

        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4,
    },
    "pernas": {

        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43,
    },
    "foguetes": {

        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2,
    }
}




function alteraValor(evento, controle) {
    const peca = controle.querySelector('[data-contador]')

    if (evento === '+') {
        peca.value++
    }
    else
        if (peca.value > 0) {
            peca.value--
        }
        else {
            alert('Você vai remover uma peça e isso pode afetar seu desempenho negativamente')
            peca.value--
        }
}


controle.forEach((elemento) => {

    elemento.addEventListener('click', (evento) => {
        alteraValor(evento.target.dataset.controle, evento.target.parentNode)
        if (evento.target.dataset.controle === '+') {
            atualizaEstaticasSoma(evento.target.dataset.peca)
        } else {
            atualizaEstaticasSubtrai(evento.target.dataset.peca)
        }
    })

})


function atualizaEstaticasSoma(peca) {

    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]

    })
}

function atualizaEstaticasSubtrai(peca) {

    estatistica.forEach((elemento) => {


        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]


    })
}

function trocaImagem(cor) {

    document.querySelector('.robo').src = "img/Robotron 2000 - " + cor + ".png"
    mudarBox(cor)
}

function mudarBox(recebeCor) {
    const box1 = document.querySelector('.box')
    const box2 = document.querySelector('.montador-conteudo')
    const textos = box1.querySelectorAll('.estatistica')
    const textos2 = box2.querySelectorAll('.peca-titulo')
    const fundoValor = box2.querySelectorAll('.controle')
    const botao = document.querySelector('.producao')
    if (recebeCor == 'Vermelho') {
        box1.style.background = 'rgba(189, 42, 46, 0.73)'
        box2.style.background = 'rgba(189, 42, 46, 0.73)'
        textos.forEach((elemento) => {
            elemento.style.color = '#3b3936'
        })
        textos2.forEach((elemento) => {
            elemento.style.color = '#3b3936'
        })
        fundoValor.forEach((elemento) => {
            elemento.style.background = '#B2BEBF'
        })
        botao.style.background = '#889C9B'
    }
    if (recebeCor == 'Rosa') {
        box1.style.background = 'rgba(217, 156, 184,  0.73)'
        box2.style.background = 'rgba(217, 156, 184,  0.73)'
        textos.forEach((elemento) => {
            elemento.style.color = '#111826'
        })
        textos2.forEach((elemento) => {
            elemento.style.color = '#111826'
        })
        fundoValor.forEach((elemento) => {
            elemento.style.background = '#A7BDD9'
        })
        botao.style.background = '#6883A6'

    } if (recebeCor == 'Preto') {
        box1.style.background = 'rgb(165, 166, 164, 0.73)'
        box2.style.background = 'rgb(165, 166, 164, 0.73)'
        textos.forEach((elemento) => {
            elemento.style.color = '#0D0000'
        })
        textos2.forEach((elemento) => {
            elemento.style.color = '#0D0000'
        })
        fundoValor.forEach((elemento) => {
            elemento.style.background = '#A5A6A4'
        })
        botao.style.background = '#403730'

    } if (recebeCor == 'Branco') {
        box1.style.background = 'rgb(255,255,255, 0.73)'
        box2.style.background = 'rgb(255,255,255, 0.73)'
        textos.forEach((elemento) => {
            elemento.style.color = '#0D0000'
        })
        textos2.forEach((elemento) => {
            elemento.style.color = '#0D0000'
        })
        fundoValor.forEach((elemento) => {
            elemento.style.background = '#FFF'
        })
        botao.style.background = '#FFF'
    } if (recebeCor == 'Azul') {
        box1.style.background = 'rgb(59, 188, 217, 0.73)'
        box2.style.background = 'rgb(59, 188, 217, 0.73)'
        textos.forEach((elemento) => {
            elemento.style.color = '#0D0000'
        })
        textos2.forEach((elemento) => {
            elemento.style.color = '#0D0000'
        })
        fundoValor.forEach((elemento) => {
            elemento.style.background = '#88e8f2'
        })
        botao.style.background = '#88e8f2'
    } if (recebeCor == 'Amarelo'){
        box1.style.background = 'rgb(242, 185, 80, 0.73)'
        box2.style.background = 'rgb(242, 185, 80, 0.73)'
        textos.forEach((elemento) => {
            elemento.style.color = '#0D0000'
        })
        textos2.forEach((elemento) => {
            elemento.style.color = '#0D0000'
        })
        fundoValor.forEach((elemento) => {
            elemento.style.background = '#A67538'
        })
        botao.style.background = '#A67538'
    }
}


