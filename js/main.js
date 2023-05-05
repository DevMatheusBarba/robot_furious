const controle = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')
console.log(estatistica)
const pecas = {
    "braco":{

        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5,
    },
    "blindagem":{

        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20,
    },
    "nucleo":{

        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4,
    },
    "pernas":{

        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43,
    },
    "foguetes":{

        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2,
    }
}




function alteraValor(evento, controle ) { 
    const peca = controle.querySelector('[data-contador]')
    
    if (evento === '+') {
        peca.value ++
    }
    else
        if (peca.value > 0) {
            peca.value --
        }
        else {
            console.log("Você não pode remover o item em questão")
        }
}


controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) =>{
        alteraValor(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstaticas(evento.target.dataset.peca)
    })
})


function atualizaEstaticas(peca) {
    estatistica.forEach( (elemento)=>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]

    } )
}


