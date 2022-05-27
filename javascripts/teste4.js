
let select1 = document.getElementById('alternativas1');
let select2 = document.getElementById('alternativas2');
let select3 = document.getElementById('alternativas3');
let select4 = document.getElementById('alternativas4');

let imagem1 = document.getElementById('resultadoImg1');
let imagem2 = document.getElementById('resultadoImg2');
let imagem3 = document.getElementById('resultadoImg3');
let imagem4 = document.getElementById('resultadoImg4');

let resultado = document.querySelector('.resultado-secao4');

let baseURL = 'https://apps.univesp.br/letramento-academico/assets/';

function geraResultado(){
  
  let valueSelected1 = document.getElementById('alternativas1').value;
  let valueSelected2 = document.getElementById('alternativas2').value;
  let valueSelected3 = document.getElementById('alternativas3').value;
  let valueSelected4 = document.getElementById('alternativas4').value;

  if(valueSelected1 !== "" && valueSelected2 !== "" && valueSelected3 !== "" && valueSelected4 !== ""){

    if (window.matchMedia("(max-width:575px)").matches) {
      /* a viewport tem menos que 576 pixels de largura */
      //scrolla pagina para inicio do teste depois de conferir resultado
      window.scrollTo(0, 2750);
    } 
    
    imagem1.style.display = "block";
    imagem2.style.display = "block";
    imagem3.style.display = "block";
    imagem4.style.display = "block";

    //mudando texto do botão e mostrando botão de mostrar respostas
    let botao = document.querySelector('.botao-resultado');
    let botao2 = document.querySelector('.botao-respostas');
    
    if(botao.innerText === "Conferir resultado"){
      botao.innerHTML = "Tentar novamente";
      botao2.style.display = 'inline';
    } else if(botao.innerText === "Tentar novamente"){

      document.location.reload(true);
      
      

      if (window.matchMedia("(max-width:575px)").matches) {
        /* a viewport tem menos que 576 pixels de largura */
        //scrolla pagina para inicio do teste depois de conferir resultado
        window.scrollTo(0, 2750);
      } else{
        //scrolla pagina para inicio do teste depois de conferir resultado
        window.scrollTo(0, 1900);
      }

      //desabilitando botões depois de finalizar o exercício
      
      botao.innerHTML = "Conferir resultado";
      
      botao2.style.display = "none";
    }

    let expandIcon = document.querySelectorAll('.open-secao4');

    expandIcon.forEach(e => {
      e.style.display = "none";
    })

    //Seta os icones de certo ou errado de acordo com a resposta
    if(valueSelected1 === "option2"){
      imagem1.setAttribute('src', baseURL+'12_certo.svg');
    }else{
      imagem1.setAttribute('src', baseURL+'13_errado.svg');
    }

    if(valueSelected2 === "option8"){
      imagem2.setAttribute('src', baseURL+'12_certo.svg');
    }else{
      imagem2.setAttribute('src', baseURL+'13_errado.svg');
    }

    if(valueSelected3 === "option11"){
      imagem3.setAttribute('src', baseURL+'12_certo.svg');
    }else{
      imagem3.setAttribute('src', baseURL+'13_errado.svg');
    }

    if(valueSelected4 === "option13"){
      imagem4.setAttribute('src', baseURL+'12_certo.svg');
    }else{
      imagem4.setAttribute('src', baseURL+'13_errado.svg');
    }

  }else{
    alert("Por favor, selecione todas as respostas.");
  }  
}

// alterando a cor de fundo dos selects
function toggleValueSelect(){
  
  let valueSelected1 = document.getElementById('alternativas1').value;
  let valueSelected2 = document.getElementById('alternativas2').value;
  let valueSelected3 = document.getElementById('alternativas3').value;
  let valueSelected4 = document.getElementById('alternativas4').value;

  if(valueSelected1 !== ""){
    select1.style.backgroundColor = "#fff";
  }else{
    select1.style.backgroundColor = "#f2f2f2";
  }

  if(valueSelected2 !== ""){
    select2.style.backgroundColor = "#fff";
  }else{
    select2.style.backgroundColor = "#f2f2f2";
  }

  if(valueSelected3 !== ""){
    select3.style.backgroundColor = "#fff";
  }else{
    select3.style.backgroundColor = "#f2f2f2";
  }

  if(valueSelected4 !== ""){
    select4.style.backgroundColor = "#fff";
  }else{
    select4.style.backgroundColor = "#f2f2f2";
  }
  
}

function boldSelected(){
  let valueSelected2 = document.getElementById('alternativas2').value;

  if(valueSelected2 === "option7" || valueSelected2 === "option8"){
    select2.style.fontWeight = "bold";
  }else{
    select2.style.fontWeight = "normal";
  }
  
}

function boldSelected2(){
  let valueSelected3 = document.getElementById('alternativas3').value;

  if(valueSelected3 === "option9" || valueSelected3 === "option10"){
    select3.style.fontWeight = "bold";
  }else{
    select3.style.fontWeight = "normal";
  }
  
}

function boldSelected3(){
  let valueSelected4 = document.getElementById('alternativas4').value;

  if(valueSelected4 === "option15" || valueSelected4 === "option16"){
    select4.style.fontWeight = "bold";
  }else{
    select4.style.fontWeight = "normal";
  }
  
}

function mostraResposta(){
  resultado.style.display = "block";

  //desabilitando botão depois de finalizar o exercício
  let botao = document.querySelector('.botao-resultado');
  let botao2 = document.querySelector('.botao-respostas');
  botao.disabled = true;
  botao.style.cursor = "default";
  botao2.disabled = true;
  botao2.style.cursor = "default";
}