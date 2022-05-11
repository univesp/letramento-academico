// Variáveis/elementos
const arrayTextos = new Request('./data/exe2.json');
let setaDireita = document.querySelector('#setaDireita');
let setaEsquerda = document.querySelector('#setaEsquerda');
let click = 0;
let numTextos = 20;
let json = {}
let caixaDoMeio = document.querySelector(".exe2Container");
let resultado = document.querySelector(".exe2-container");
let fazer = document.querySelector("#fazer");
let naoFazer = document.querySelector("#nao-fazer");
let btnVerifica = document.querySelector("#exe2");
let index = 0;
let progress = document.querySelector('.progress');
let newProgress = 0;
let clickProgresso = 0;
let $counter = $('.progress-bar');
let numBoxCounter = 1;

//Setters
setaDireita.addEventListener('click', fSetaDireita);
setaEsquerda.addEventListener('click', fSetaEsquerda);
btnVerifica.addEventListener('click', fVerifica);


//Funções

function fVerifica(){
  if(click === numTextos-1){
    json.map(item =>{
      
      if(item.devoFazerGab === item.devoFazer){
        fCorreto(item.id)
      }
      else{
        fErrado(item.id)
      }
    })
  }else{
    alert("Preencha as colunas antes de conferir o resultado")
  }
  
  
}
function fCorreto(idjson){
  let elemento = document.querySelector('div[data-id="' + idjson + '"] > img')
  elemento.src = '/assets/12_certo.svg'
  elemento.style.display = 'inherit'
}
function fErrado(idjson){
  let elemento = document.querySelector('div[data-id="' + idjson + '"] > img')
  elemento.src = '/assets/13_errado.svg'
  elemento.style.display = 'inherit'
}

function primeiroPasso(){
  let texto = json[0].texto;
  let elemento = criaElemento(texto, 'card-teste-exe2', '1','1/20');
  caixaDoMeio.appendChild(elemento)
}

function fSetaDireita(texto){
  newProgress = newProgress + 5;

  $counter.attr('aria-valuenow', newProgress+'%').css('width', newProgress+'%');
  

  if(click < numTextos){

    let elemento2 = criaElemento(json[click].texto, 'card-teste-exe2-coluna', 'coluna-naoDevoFazer', ' ');
    elemento2.dataset.id = json[click].id;
    naoFazer.appendChild(elemento2);

    if(click < numTextos-1){
      adicionaClick();
      apagarCaixaDoMeio();
      atualizaJsonDevoFazer(index, false);
      index++;
      numBoxCounter++;
      let elemento1 = criaElemento(json[click].texto, 'card-teste-exe2', 'card-teste-exe2', String(numBoxCounter)+'/20');
      caixaDoMeio.appendChild(elemento1);
    }else{
      setTimeout(() => {apagaSetaseCaixaDoMeio()}, 1000);
      setTimeout(() => {mostraResultado()}, 1000);
      setTimeout(() => {fVerifica()}, 1000);
    }    
    
  }
}

function fSetaEsquerda(texto){
  newProgress = newProgress + 5;

  $counter.attr('aria-valuenow', newProgress+'%').css('width', newProgress+'%');
  

  if(click < numTextos){
    //Construção do elemento 
    let elemento2 = criaElemento(json[click].texto, 'card-teste-exe2-coluna', 'coluna-devoFazer', '');
    fazer.appendChild(elemento2);
    elemento2.dataset.id = json[click].id;

    

    if(click < numTextos-1){
      //atualiza o contador
      adicionaClick();
      //atualiza caixa do meio
      apagarCaixaDoMeio();
      atualizaJsonDevoFazer(index, true);
      index++;
      numBoxCounter++;
      let elemento1 = criaElemento(json[click].texto, 'card-teste-exe2', 'card-teste-exe2', String(numBoxCounter)+'/20');
      caixaDoMeio.appendChild(elemento1);  
    }else{
      setTimeout(() => {apagaSetaseCaixaDoMeio()}, 1000);
      setTimeout(() => {mostraResultado()}, 1000);
      setTimeout(() => {fVerifica()}, 1000);
    }
    
  }
}

function criaElemento(texto, classe, classe2, numBox){
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

function leJSON(){
  fetch(arrayTextos)
  .then(response => {
    return(response.json());
  }).then(data => {
    json = data;
    primeiroPasso()
    return data
  })
}

function apagaSetaseCaixaDoMeio(){
  setaDireita.style.display = "none";
  setaEsquerda.style.display = "none";
  caixaDoMeio.style.display = "none";
  progress.style.display = "none";
}

function apagarCaixaDoMeio(){
  caixaDoMeio.innerHTML = ""
}

function adicionaClick(){
  click++;
}

function atualizaJsonDevoFazer(i, value){
  //console.log(json, click, 'i: ' + i)
  
  json[i].devoFazer = value;
}

function mostraResultado(){
  resultado.style.display = "flex";
}

leJSON()
