//controle de interface
let seuVotopara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

// variaveis de ambiente
let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = [];


function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
    numero = '';
    votoBranco = false;

    for(let i=0; i<etapa.numeros; i++){
        if(i == 0){
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotopara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    console.log('Atualizando interface');

    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if(item.numero === numero){
            return true;
        } else {
            return false;
        }
    });

    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotopara.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.name} <br/> Pertido: ${candidato.partido}`;
        aviso.style.display = 'block';

        let fotosHtml = '';
        for(let i in candidato.fotos){
            if(candidato.fotos[i].small){
                fotosHtml += `<div class="d-1-images small"> <img src="${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda} </div>`;
            } else{
                fotosHtml += `<div class="d-1-images"> <img src="${candidato.fotos[i].url}" alt=""> ${candidato.fotos[i].legenda} </div>`;
            }
        }

        lateral.innerHTML = fotosHtml;
    } else {
        seuVotopara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `<div class="aviso--grande pisca"> VOTO NULO </div>`;
    }

    console.log("Candito", candidato);

}

function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        } else{
            atualizaInterface();
        }
    }
}

function branco() {
    console.log('branco');
    if(numero === ''){
        votoBranco = true;
        seuVotopara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = `<div class="aviso--grande pisca"> VOTO BRANCO </div>`;
        lateral.innerHTML = '';
    } else {
        alert("Para votar em branco, não pode ser ditado nenhum numero!");
    }
}

function corrigi() {
    console.log('corrigi');
    comecarEtapa();
}

function confirma(){
    console.log('confirma');

    let etapa = etapas[etapaAtual];
    let votoConfirmado = false;

    if(votoBranco === true){
        console.log("Confirmando voto em brando");
        votoConfirmado = true;

        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        });
    }else if(numero.length === etapa.numeros){
        console.log("Confirmando como " + numero);
        votoConfirmado = true;

        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        });
    }

    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        } else{
            document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca"> FIM </div>';
            console.log(votos);
        }
    }
}

comecarEtapa();