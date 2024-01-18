let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = 5;
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
function exibierMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibierMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    tentativas++;
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor!");
    }
    if (chute < numeroSecreto)
      exibirTextoNaTela("p", "O número secreto é maior!");
  }
  limparCampo();
}
function limparCampo() {
  chute = document.querySelector("imput");
  chute.value = "";
}

function gerarNumeroAleatorio() {
  let numeroEsolhido =  parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEsolhido)){
    return gerarNumeroAleatorio;
  }else{
    listaDeNumerosSorteados.push(numeroEsolhido);
  return numeroEsolhido;
  }
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;

  document.getElementById('reiniciar').setAttribute('disabled',true);
  exibierMensagemInicial();
}
