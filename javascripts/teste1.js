//Variáveis
let imagem1 = document.getElementById('resultadoImg1');
let imagem2 = document.getElementById('resultadoImg2');
let imagem3 = document.getElementById('resultadoImg3');
let imagem4 = document.getElementById('resultadoImg4');
let imagem5 = document.getElementById('resultadoImg5');

let resultadoDiv1 = document.getElementById('resultado-div1');
let resultadoDiv2 = document.getElementById('resultado-div2');
let resultadoDiv3 = document.getElementById('resultado-div3');
let resultadoDiv4 = document.getElementById('resultado-div4');
let resultadoDiv5 = document.getElementById('resultado-div5');

let select1 = document.getElementById('alternativas1');
let select2 = document.getElementById('alternativas2');
let select3 = document.getElementById('alternativas3');
let select4 = document.getElementById('alternativas4');
let select5 = document.getElementById('alternativas5');

let baseURL = 'https://apps.univesp.br/letramento-academico/assets/';

const text1 = "option1";
const text2 = "option2";
const text3 = "option3";
const text4 = "option4";
const text5 = "option5";

const resposta1 = "Resumo e resenha";
const resposta2 = "Relatório técnico";
const resposta3 = "Artigo científico";
const resposta4 = "Monografia";
const resposta5 = "Trabalho de Conclusão de Curso (TCC)";

  
//Funções

function geraResultado(){
  let texto1 = select1.value;
  let texto2 = select2.value;
  let texto3 = select3.value;
  let texto4 = select4.value;
  let texto5 = select5.value;

  if(texto1 === "" || texto2 === "" || texto3 === "" || texto4 === "" || texto5 === ""){
    alert("Por favor, selecione todas as respostas.");
  }else{

    //aumenta area do exercício depois de conferir resultado
    let areaExe = document.querySelector('.card-container2');
    if (window.matchMedia("(min-width:768px)").matches) {
      /* a viewport tem pelo menos 768 pixels de largura */
      areaExe.style.height = "1500px";
    } else if(window.matchMedia("(min-width:576px)").matches) {
      /* a viewport tem pelo menos 576 pixels de largura */
      areaExe.style.height = "2700px";
    }else{
      /* a viewport menos que 576 pixels de largura */
      areaExe.style.height = "2600px";
    }
    
    //mostrando a div dos icones de certo e errado
    resultadoDiv1.style.display = "block";
    resultadoDiv2.style.display = "block";
    resultadoDiv3.style.display = "block";
    resultadoDiv4.style.display = "block";
    resultadoDiv5.style.display = "block";

    //desabilitando os selects depois de finalizar o exercício
    select1.setAttribute('disabled', true);
    select1.style.cursor = "default";
    select1.style.color = "#000";
    select2.setAttribute('disabled', true);
    select2.style.cursor = "default";
    select2.style.color = "#000";
    select3.setAttribute('disabled', true);
    select3.style.cursor = "default";
    select3.style.color = "#000";
    select4.setAttribute('disabled', true);
    select4.style.cursor = "default";
    select4.style.color = "#000";
    select5.setAttribute('disabled', true);
    select5.style.cursor = "default";
    select5.style.color = "#000";

    //mudando texto do botão e mostrando botão de mostrar respostas
    let botao = document.querySelector('.botao-resultado');
    let botao2 = document.querySelector('.botao-respostas');
    
    if(botao.innerText === "Conferir resultado"){
      botao.innerHTML = "Tentar novamente";
      botao2.style.display = 'inline';
    } else if(botao.innerText === "Tentar novamente"){

      if (window.matchMedia("(min-width:768px)").matches) {
        /* a viewport tem pelo menos 768 pixels de largura */
        areaExe.style.height = "1500px";
      } else if(window.matchMedia("(min-width:576px)").matches) {
        /* a viewport tem pelo menos 576 pixels de largura */
        areaExe.style.height = "2700px";
      }else{
        /* a viewport menos que 576 pixels de largura */
        areaExe.style.height = "2200px";
      }

      if (window.matchMedia("(min-width:768px)").matches) {
        /* a viewport tem pelo menos 768 pixels de largura */
        //scrolla pagina para inicio do teste depois de conferir resultado
        window.scrollTo(0, 2200);
      } else if(window.matchMedia("(min-width:576px)").matches) {
        /* a viewport tem pelo menos 576 pixels de largura */
        //scrolla pagina para inicio do teste depois de conferir resultado
        window.scrollTo(0, 3200);
      } else{
        /* a viewport menos que 576 pixels de largura */
        //scrolla pagina para inicio do teste depois de conferir resultado
        window.scrollTo(0, 4400);
      }

      resetaExercicio();

      //desabilitando botões depois de finalizar o exercício
      
      botao.innerHTML = "Conferir resultado";
      
      botao2.style.display = "none";
    }
    

    if (window.matchMedia("(min-width:768px)").matches) {
      /* a viewport tem pelo menos 768 pixels de largura */
      //scrolla pagina para inicio do teste depois de conferir resultado
      window.scrollTo(0, 2200);
    } else if(window.matchMedia("(min-width:576px)").matches) {
      /* a viewport tem pelo menos 576 pixels de largura */
      //scrolla pagina para inicio do teste depois de conferir resultado
      window.scrollTo(0, 3200);
    } else{
      /* a viewport menos que 576 pixels de largura */
      //scrolla pagina para inicio do teste depois de conferir resultado
      window.scrollTo(0, 4400);
    }

    
  }  


  //Seta os icones de certo ou errado de acordo com a resposta
  if(texto1 === text4){
    imagem1.setAttribute('src', baseURL+'12_certo.svg');
  }else{
    imagem1.setAttribute('src', baseURL+'13_errado.svg');
  }

  if(texto2 === text3){
    imagem2.setAttribute('src', baseURL+'12_certo.svg');
  }else{
    imagem2.setAttribute('src', baseURL+'13_errado.svg');
  }

  if(texto3 === text1){
    imagem3.setAttribute('src', baseURL+'12_certo.svg');
  }else{
    imagem3.setAttribute('src', baseURL+'13_errado.svg');
  }

  if(texto4 === text2){
    imagem4.setAttribute('src', baseURL+'12_certo.svg');
  }else{
    imagem4.setAttribute('src', baseURL+'13_errado.svg');
  }

  if(texto5 === text5){
    imagem5.setAttribute('src', baseURL+'12_certo.svg');
  }else{
    imagem5.setAttribute('src', baseURL+'13_errado.svg');
  }
  
}


// alterando a cor de fundo dos selects
function toggleValueSelect(){
  let valueSelected1 = document.getElementById('alternativas1').value;
  let valueSelected2 = document.getElementById('alternativas2').value;
  let valueSelected3 = document.getElementById('alternativas3').value;
  let valueSelected4 = document.getElementById('alternativas4').value;
  let valueSelected5 = document.getElementById('alternativas5').value;

  if(valueSelected1 !== ""){
    select1.style.backgroundColor = "#feec21";
  }else{
    select1.style.backgroundColor = "#dfdfdf";
  }

  if(valueSelected2 !== ""){
    select2.style.backgroundColor = "#feec21";
  }else{
    select2.style.backgroundColor = "#dfdfdf";
  }

  if(valueSelected3 !== ""){
    select3.style.backgroundColor = "#feec21";
  }else{
    select3.style.backgroundColor = "#dfdfdf";
  }

  if(valueSelected4 !== ""){
    select4.style.backgroundColor = "#feec21";
  }else{
    select4.style.backgroundColor = "#dfdfdf";
  }

  if(valueSelected5 !== ""){
    select5.style.backgroundColor = "#feec21";
  }else{
    select5.style.backgroundColor = "#dfdfdf";
  }
  
}

function mostraRespostas(){
  //Criando divs das respostas corretas
  let areaTeste = document.querySelectorAll('.teste-area');
  let id = 1;

  areaTeste.forEach(e =>  {
    let resposta = document.createElement('div');
    resposta.classList.add('resposta-box-exe1');
    
    let p = document.createElement('p');
    let customId = 'resposta-exe-' + String(id);
    p.setAttribute('id', customId);
    id++
    resposta.appendChild(p);
    
    e.after(resposta);
  })

  // Mostrando as respostas corretas
  let respostaCerta1 = document.getElementById('resposta-exe-1')
  respostaCerta1.innerHTML = "Resposta certa: " + resposta1.bold() + '.';
  let respostaCerta2 = document.getElementById('resposta-exe-2')
  respostaCerta2.innerHTML = "Resposta certa: " + resposta2.bold() + '.';
  let respostaCerta3 = document.getElementById('resposta-exe-3')
  respostaCerta3.innerHTML = "Resposta certa: " + resposta3.bold() + '.';
  let respostaCerta4 = document.getElementById('resposta-exe-4')
  respostaCerta4.innerHTML = "Resposta certa: " + resposta4.bold() + '.';
  let respostaCerta5 = document.getElementById('resposta-exe-5')
  respostaCerta5.innerHTML = "Resposta certa: " + resposta5.bold() + '.';

  if (window.matchMedia("(min-width:768px)").matches) {
    /* a viewport tem pelo menos 768 pixels de largura */
    //scrolla pagina para inicio do teste depois de conferir resultado
    window.scrollTo(0, 2200);
  } else if(window.matchMedia("(min-width:576px)").matches) {
    /* a viewport tem pelo menos 576 pixels de largura */
    //scrolla pagina para inicio do teste depois de conferir resultado
    window.scrollTo(0, 3200);
  } else{
    /* a viewport menos que 576 pixels de largura */
    //scrolla pagina para inicio do teste depois de conferir resultado
    window.scrollTo(0, 4400);
  }

  //aumenta area do exercício depois de conferir resultado
  let areaExe = document.querySelector('.card-container2');
  if (window.matchMedia("(min-width:768px)").matches) {
    /* a viewport tem pelo menos 768 pixels de largura */
    areaExe.style.height = "1500px";
  } else if(window.matchMedia("(min-width:576px)").matches) {
    /* a viewport tem pelo menos 576 pixels de largura */
    areaExe.style.height = "3000px";
  }else{
    /* a viewport menos que 576 pixels de largura */
    areaExe.style.height = "3100px";
  }

  //desabilitando botões depois de finalizar o exercício
  let botao = document.querySelector('.botao-resultado');
  let botao2 = document.querySelector('.botao-respostas');
  botao.disabled = true;
  botao.style.cursor = "default";
  botao2.disabled = true;
  botao2.style.cursor = "default";
}

function resetaExercicio(){
  //escondendo a div dos icones de certo e errado
  resultadoDiv1.style.display = "none";
  resultadoDiv2.style.display = "none";
  resultadoDiv3.style.display = "none";
  resultadoDiv4.style.display = "none";
  resultadoDiv5.style.display = "none";

  //habilitando os selects depois de finalizar o exercício
  select1.removeAttribute('disabled');
  select1.style.cursor = "pointer";
  select1.style.color = "#000";
  select2.removeAttribute('disabled');
  select2.style.cursor = "pointer";
  select2.style.color = "#000";
  select3.removeAttribute('disabled');
  select3.style.cursor = "pointer";
  select3.style.color = "#000";
  select4.removeAttribute('disabled');
  select4.style.cursor = "pointer";
  select4.style.color = "#000";
  select5.removeAttribute('disabled');
  select5.style.cursor = "pointer";
  select5.style.color = "#000";
}

let collapseMobile = function(){
  if (window.matchMedia("(max-width:575px)").matches) {
    
    window.scrollTo(0, 4300);
  }
}

let collapseTwo = document.querySelector('#collapse2');

collapseTwo.addEventListener('click', collapseMobile)