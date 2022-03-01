function geraResultado(){
  let resultado = document.querySelector('.resultado-secao4');

  const texto = "Escolha uma opção";

  let paragrafo1 = document.querySelector('#texto-option1-div1').innerText;
  let paragrafo2 = document.querySelector('#texto-option1-div2').innerText;
  let paragrafo3 = document.querySelector('#texto-option1-div3').innerText;
  let paragrafo4 = document.querySelector('#texto-option1-div4').innerText;

  if(paragrafo1 !== texto && paragrafo2 !== texto && paragrafo3 !== texto && paragrafo4 !== texto){
    resultado.style.display = "block";
  }else{
    alert("Por favor, selecione todas as respostas.");
  }

  
}

function collapseTeste(e){
  let alternativas1 = document.getElementById('alternativas1');
  let alternativas2 = document.getElementById('alternativas2');
  let alternativas3 = document.getElementById('alternativas3');
  let alternativas4 = document.getElementById('alternativas4');

  let arrowText = document.getElementById('expand-teste1').innerText;
  let arrow = document.getElementById('expand-teste1');
  let arrowText2 = document.getElementById('expand-teste2').innerText;
  let arrow2 = document.getElementById('expand-teste2');
  let arrowText3 = document.getElementById('expand-teste3').innerText;
  let arrow3 = document.getElementById('expand-teste3');
  let arrowText4 = document.getElementById('expand-teste4').innerText;
  let arrow4 = document.getElementById('expand-teste4');

  if(e === 1 && arrowText === "arrow_drop_down"){
    arrow.innerHTML = "arrow_drop_up"
    alternativas1.style.display = "block";
  }else{
    arrow.innerHTML = "arrow_drop_down";
    alternativas1.style.display = "none";
  }

  if(e === 2 && arrowText2 === "arrow_drop_down"){
    arrow2.innerHTML = "arrow_drop_up"
    alternativas2.style.display = "block";
  }else{
    arrow2.innerHTML = "arrow_drop_down";
    alternativas2.style.display = "none";
  }

  if(e === 3 && arrowText3 === "arrow_drop_down"){
    arrow3.innerHTML = "arrow_drop_up"
    alternativas3.style.display = "block";
  }else{
    arrow3.innerHTML = "arrow_drop_down";
    alternativas3.style.display = "none";
  }

  if(e === 4 && arrowText4 === "arrow_drop_down"){
    arrow4.innerHTML = "arrow_drop_up"
    alternativas4.style.display = "block";
  }else{
    arrow4.innerHTML = "arrow_drop_down";
    alternativas4.style.display = "none";
  }
}

function insereTexto(e){
  const option1 = "Nome, SOBRENOME";
  const option2 = "SOBRENOME, Nome";
  const option3 = "SOBRENOME, NOME";
  const option4 = "SOBRENOME, nome";
  
  const option5 = "TÍTULO DO LIVRO";
  const option6 = "Título do livro";
  const option7 = "<strong>TÍTULO DO LIVRO</strong>";
  const option8 = "<strong>Título do livro</strong>";

  const option9 = "<strong>Cidade</strong>";
  const option10 = "<strong>CIDADE</strong>";
  const option11 = "Cidade";
  const option12 = "CIDADE";

  const option13 = "Editora";
  const option14 = "EDITORA";
  const option15 = "<strong>Editora</strong>";
  const option16 = "<strong>EDITORA</strong>";

  let paragrafo1Div1 = document.getElementById('texto-option1-div1');
  let paragrafo1Div2 = document.getElementById('texto-option1-div2');
  let paragrafo1Div3 = document.getElementById('texto-option1-div3');
  let paragrafo1Div4 = document.getElementById('texto-option1-div4');

  let alternativas1 = document.getElementById('alternativas1');
  let alternativas2 = document.getElementById('alternativas2');
  let alternativas3 = document.getElementById('alternativas3');
  let alternativas4 = document.getElementById('alternativas4');

  let arrow = document.getElementById('expand-teste1');
  let arrow2 = document.getElementById('expand-teste2');
  let arrow3 = document.getElementById('expand-teste3');
  let arrow4 = document.getElementById('expand-teste4');

  if(e === 1){
    paragrafo1Div1.innerHTML = option1;
    alternativas1.style.display = "none";
    arrow.innerHTML = "arrow_drop_down";
    arrow.style.marginTop = "-10%";
  }

  if(e === 2){
    paragrafo1Div1.innerHTML = option2;
    alternativas1.style.display = "none";
    arrow.innerHTML = "arrow_drop_down";
    arrow.style.marginTop = "-10%";
  }

  if(e === 3){
    paragrafo1Div1.innerHTML = option3;
    alternativas1.style.display = "none";
    arrow.innerHTML = "arrow_drop_down";
    arrow.style.marginTop = "-10%";
  }

  if(e === 4){
    paragrafo1Div1.innerHTML = option4;
    alternativas1.style.display = "none";
    arrow.innerHTML = "arrow_drop_down";
    arrow.style.marginTop = "-10%";
  }

  if(e === 5){
    paragrafo1Div2.innerHTML = option5;
    arrow2.style.marginTop = "-20%";
    alternativas2.style.display = "none";
    arrow2.innerHTML = "arrow_drop_down";
  }

  if(e === 6){
    paragrafo1Div2.innerHTML = option6;
    alternativas2.style.display = "none";
    arrow2.innerHTML = "arrow_drop_down";
    arrow2.style.marginTop = "-10%";
  }

  if(e === 7){
    paragrafo1Div2.innerHTML = option7;
    alternativas2.style.display = "none";
    arrow2.innerHTML = "arrow_drop_down";
    arrow2.style.marginTop = "-10%";
  }

  if(e === 8){
    paragrafo1Div2.innerHTML = option8;
    alternativas2.style.display = "none";
    arrow2.innerHTML = "arrow_drop_down";
    arrow2.style.marginTop = "-10%";
  }

  if(e === 9){
    paragrafo1Div3.innerHTML = option9;
    alternativas3.style.display = "none";
    arrow3.innerHTML = "arrow_drop_down";
    arrow3.style.marginTop = "-10%";
  }

  if(e === 10){
    paragrafo1Div3.innerHTML = option10;
    arrow3.style.marginTop = "-20%";
    alternativas3.style.display = "none";
    arrow3.innerHTML = "arrow_drop_down";
  }

  if(e === 11){
    paragrafo1Div3.innerHTML = option11;
    alternativas3.style.display = "none";
    arrow3.innerHTML = "arrow_drop_down";
    arrow3.style.marginTop = "-10%";
  }

  if(e === 12){
    paragrafo1Div3.innerHTML = option12;
    alternativas3.style.display = "none";
    arrow3.innerHTML = "arrow_drop_down";
    arrow3.style.marginTop = "-10%";
  }

  if(e === 13){
    paragrafo1Div4.innerHTML = option13;
    alternativas4.style.display = "none";
    arrow4.innerHTML = "arrow_drop_down";
    arrow4.style.marginTop = "-10%";
  }

  if(e === 14){
    paragrafo1Div4.innerHTML = option14;
    alternativas4.style.display = "none";
    arrow4.innerHTML = "arrow_drop_down";
    arrow4.style.marginTop = "-10%";
  }

  if(e === 15){
    paragrafo1Div4.innerHTML = option15;
    arrow4.style.marginTop = "-20%";
    alternativas4.style.display = "none";
    arrow4.innerHTML = "arrow_drop_down";
  }

  if(e === 16){
    paragrafo1Div4.innerHTML = option16;
    alternativas4.style.display = "none";
    arrow4.innerHTML = "arrow_drop_down";
    arrow4.style.marginTop = "-10%";
  }
}