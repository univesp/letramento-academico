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
    resultadoDiv1.style.display = "block";
    resultadoDiv2.style.display = "block";
    resultadoDiv3.style.display = "block";
    resultadoDiv4.style.display = "block";
    resultadoDiv5.style.display = "block";

    select1.setAttribute('disabled', true);
    select1.style.cursor = "default";
    select2.setAttribute('disabled', true);
    select2.style.cursor = "default";
    select3.setAttribute('disabled', true);
    select3.style.cursor = "default";
    select4.setAttribute('disabled', true);
    select4.style.cursor = "default";
    select5.setAttribute('disabled', true);
    select5.style.cursor = "default";

    let botao = document.querySelector('.botao-resultado');

    botao.disabled = true;
    botao.style.cursor = "default";

    let areaTeste = document.querySelectorAll('.teste-area');
    let id = 1;

    areaTeste.forEach(e =>  {
      let resposta = document.createElement('div');
      resposta.classList.add('resposta-box-exe1');
      let customId = 'resposta-exe-' + String(id);
      resposta.setAttribute('id', customId);
      id++
      let p = document.createElement('p');
      resposta.appendChild(p);
      
      p.innerHTML = "Resposta certa: " + resposta1.bold() + '.';
      
      

      e.after(resposta);
    })
  }  

  //Seta a imagem de acordo com a resposta
  if(texto1 === text4){
    imagem1.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem1.setAttribute('src', '/assets/13_errado.svg');
  }

  if(texto2 === text3){
    imagem2.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem2.setAttribute('src', '/assets/13_errado.svg');
  }

  if(texto3 === text1){
    imagem3.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem3.setAttribute('src', '/assets/13_errado.svg');
  }

  if(texto4 === text2){
    imagem4.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem4.setAttribute('src', '/assets/13_errado.svg');
  }

  if(texto5 === text5){
    imagem5.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem5.setAttribute('src', '/assets/13_errado.svg');
  }
  
}


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


