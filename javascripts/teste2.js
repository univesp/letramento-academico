const arrayTextos = new Request('./data/exe2.json');

$(document).ready(function(){
  let div = document.querySelector(".exe2Container");
  let div2 = document.createElement('div');
  let p = document.createElement('p');

  div2.appendChild(p);
  div.appendChild(div2).classList.add('card-teste-exe2');

  p.innerHTML = 'Preparar-se antes de escrever o texto.';

  return div;
})

let click = 2;


function criaElemento(){

  fetch(arrayTextos)
  .then(response => response.json())
  .then(data => {
  data.map((dado)=>{
    let texto = dado.texto;
    let id = dado.id;
    

    if(id === click){
      let div = document.querySelector(".exe2Container");
    let div2 = document.createElement('div');
    let p = document.createElement('p');

    div2.appendChild(p);
    div.appendChild(div2).classList.add('card-teste-exe2');

    p.innerHTML = texto;

    return div;
    }
    
    
  })
})
.then(()=>{
  if(click < 22){
    click++;
  console.log(click);
  }else{
    return;
  }

})

}


let botao = document.querySelector('#setaDireita');
botao.addEventListener('click', criaElemento)


function setaRight(){
  let coluna = document.querySelector('#nao-fazer-coluna');
  
  coluna.innerHTML = "TESTANDO"
  //chama busca - let conteudo = busca()

  //construir elemento - let elemento = criaElemento(conteudo)

  //atualizar caixa - atualizaCaixa()

  //buscar coluna -> appendChild na coluna - coluna.appendChild(caixa)
}

//buscar as 2 setas

//buscar a caixa

//atribuir funções de click fn setaLeft e fn setaRight
//criar fn busca - return caixa.innerHTML

//criar função criaElemento(texto)

//criar função atualizaCaixa 
//criar array global com os textos
//append elemento