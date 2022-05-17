// Variáveis globais
const arrayTextos = new Request('./data/exe2.json');
let click = 0;
let numTextos = 20;
let newProgress = 0;
let baseURL = 'https://apps.univesp.br/letramento-academico/assets/';

//Getters
let setaDireita = document.querySelector('#setaDireita');
let setaEsquerda = document.querySelector('#setaEsquerda');
let json = {}
let caixaDoMeio = document.querySelector(".exe2Container");
let resultado = document.querySelector(".exe2-container");
let fazer = document.querySelector("#fazer");
let naoFazer = document.querySelector("#nao-fazer");
let btnVerifica = document.querySelector("#exe2");
let progress = document.querySelector('.progress');
let $counter = $('.progress-bar');
let botoes = document.querySelector('.botoes-exe2');

//Funções
let leJSON = function() {
  fetch(arrayTextos)
  .then(response => {
    return(response.json());
  }).then(data => {
    json = data;
    primeiroPasso()
    return data
  })
}
let fSeta = function(){
  let isEsquerda = (this.id == "setaEsquerda")
  //Dinâmica do Load
  newProgress = newProgress + 5;
  $counter.attr('aria-valuenow', newProgress+'%').css('width', newProgress+'%');
  //Click de 0 até 19
  if(click < numTextos){
    //Pega o texto atual da caixa e joga pra caixa em qual clicou

    //Cria o elemento
    let elemento2 = criaElemento(json[click].texto, 'card-teste-exe2-coluna', 'coluna-naoDevoFazer', ' ');
    //Seta o id do objeto no elemento criado
    elemento2.dataset.id = json[click].id;
    //Appenda o elemento na caixa respectiva
    if(isEsquerda){
      fazer.appendChild(elemento2)
    }
    else{
      naoFazer.appendChild(elemento2);
    }
    //Atualiza objeto
    atualizaJsonDevoFazer(click, isEsquerda);
    //atualiza o contador
    adicionaClick();

    //Atualiza caixa do meio se click  de 0 a 19
    if(click < 20){
      apagarCaixaDoMeio();
      let elemento1 = criaElemento(json[click].texto, 'card-teste-exe2', 'card-teste-exe2', String(click+1)+'/20');
      caixaDoMeio.appendChild(elemento1);
    }
    //se click = 20 revela o resultado
    else{
      setaDireita.disabled = true;
      setaDireita.style.cursor = "default";
      setaDireita.classList.remove('box-alternativa2-exe2');
      setaDireita.classList.add('box-alternativa2-exe2-done');
      setaEsquerda.disabled = true;
      setaEsquerda.style.cursor = "default";
      setaEsquerda.classList.remove('box-alternativa-exe2');
      setaEsquerda.classList.add('box-alternativa-exe2-done');
      setTimeout(() => {apagaSetaseCaixaDoMeio()}, 1000);
      setTimeout(() => {mostraResultado()}, 1000);
      setTimeout(() => {fVerifica()}, 1000);
      setTimeout(() => {mostraBotoes()}, 1000);
    }
  }  
}
let primeiroPasso = function() {
  let texto = json[0].texto;
  let elemento = criaElemento(texto, 'card-teste-exe2', '1','1/20');
  caixaDoMeio.appendChild(elemento)
}
let fVerifica = function() {
  json.map(item =>{
    if(item.devoFazerGab === item.devoFazer){
      fCorreto(item.id)
    }
    else{
      fErrado(item.id)
    }
  })
}
let fCorreto = function(idjson) {
  let elemento = document.querySelector('div[data-id="' + idjson + '"] > img')
  elemento.src = baseURL+'12_certo.svg'
  elemento.style.display = 'inherit'
}
let fErrado = function(idjson) {
  let elemento = document.querySelector('div[data-id="' + idjson + '"] > img')
  elemento.src = baseURL+'13_errado.svg'
  elemento.style.display = 'inherit'
}
let criaElemento = function(texto, classe, classe2, numBox) {
  let div = document.createElement('div');
  div.classList.add(classe);
  div.classList.add(classe2);
  let p = document.createElement('p');
  let span = document.createElement('span');
  span.classList.add('num-box-exe2')
  div.appendChild(p);
  div.appendChild(span);
  let img = document.createElement('img')
  img.style.width = '35px'
  img.style.height = '35px'
  img.style.display = 'none'
  div.appendChild(img);
  p.innerHTML = texto;
  span.innerHTML = numBox;
  return div
}

let criaResposta = function(texto, classe) {
  let div = document.createElement('div');
  div.classList.add(classe);
  let p = document.createElement('p');
  div.appendChild(p);
  p.innerHTML = texto;
  return div
}

let apagaSetaseCaixaDoMeio = function() {
  setaDireita.style.display = "none";
  setaEsquerda.style.display = "none";
  caixaDoMeio.style.display = "none";
  progress.style.display = "none";
}
let apagarCaixaDoMeio = function() {
  caixaDoMeio.innerHTML = ""
}
let adicionaClick = function() {
  click++;
}
let atualizaJsonDevoFazer = function(i, value) {
  json[i].devoFazer = value;
}
let mostraResultado = function() {
  resultado.style.display = "flex";
}
let mostraBotoes = function(){
  botoes.style.display = 'block';
}

function tentarNovamente(){
  document.location.reload(true);

  //scrolla pagina para inicio do teste depois de conferir resultado
  window.scrollTo(0, 2300);
}

function mostraRespostas(){
  //apaga cards das colunas
  let cards = document.querySelectorAll('.card-teste-exe2-coluna');
  cards.forEach(e => {
    (e).remove()
  })

  //criando cards nas divs corretas
  json.map(item => {
    let respostas = criaResposta(item.texto, 'card-teste-exe2-coluna');

    if(item.devoFazerGab === true){
      fazer.appendChild(respostas)
    }else{
      naoFazer.appendChild(respostas)
    }
  })

 //Apagando botões depois de finalizar o exercício
 botoes.style.display = "none";

 //scrolla pagina para inicio do teste depois de conferir resultado
 window.scrollTo(0, 2600);
 
}

//Setters
setaDireita.addEventListener('click', fSeta);
setaEsquerda.addEventListener('click', fSeta);
btnVerifica.addEventListener('click', fVerifica);

//Início do processamento
leJSON()


