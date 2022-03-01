function collapseTeste(e){
  let alternativas1 = document.getElementById('alternativas1');
  let alternativas2 = document.getElementById('alternativas2');
  let alternativas3 = document.getElementById('alternativas3');
  let alternativas4 = document.getElementById('alternativas4');
  let alternativas5 = document.getElementById('alternativas5');

  let arrowText = document.getElementById('expand-teste1').innerText;
  let arrow = document.getElementById('expand-teste1');
  let arrowText2 = document.getElementById('expand-teste2').innerText;
  let arrow2 = document.getElementById('expand-teste2');
  let arrowText3 = document.getElementById('expand-teste3').innerText;
  let arrow3 = document.getElementById('expand-teste3');
  let arrowText4 = document.getElementById('expand-teste4').innerText;
  let arrow4 = document.getElementById('expand-teste4');
  let arrowText5 = document.getElementById('expand-teste5').innerText;
  let arrow5 = document.getElementById('expand-teste5');

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

  if(e === 5 && arrowText5 === "arrow_drop_down"){
    arrow5.innerHTML = "arrow_drop_up"
    alternativas5.style.display = "block";
  }else{
    arrow5.innerHTML = "arrow_drop_down";
    alternativas5.style.display = "none";
  }
}

//////INSERINDO TEXTO NO PARAGRAFO//////////////
function insereTexto(e){
  const option1 = "Artigo científico";
  const option2 = "Monografia";
  const option3 = "Relatório técnico";
  const option4 = "Resumo e resenha";
  const option5 = "Trabalho de Conclusão de Curso (TCC)";

  let paragrafo1Div1 = document.getElementById('texto-option1-div1');
  let paragrafo1Div2 = document.getElementById('texto-option1-div2');
  let paragrafo1Div3 = document.getElementById('texto-option1-div3');
  let paragrafo1Div4 = document.getElementById('texto-option1-div4');
  let paragrafo1Div5 = document.getElementById('texto-option1-div5');

  let alternativas1 = document.getElementById('alternativas1');
  let alternativas2 = document.getElementById('alternativas2');
  let alternativas3 = document.getElementById('alternativas3');
  let alternativas4 = document.getElementById('alternativas4');
  let alternativas5 = document.getElementById('alternativas5');

  let arrow = document.getElementById('expand-teste1');
  let arrow2 = document.getElementById('expand-teste2');
  let arrow3 = document.getElementById('expand-teste3');
  let arrow4 = document.getElementById('expand-teste4');
  let arrow5 = document.getElementById('expand-teste5');

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
    paragrafo1Div1.innerHTML = option5;
    arrow.style.marginTop = "-20%";
    alternativas1.style.display = "none";
    arrow.innerHTML = "arrow_drop_down";
  }

  if(e === 6){
    paragrafo1Div2.innerHTML = option1;
    alternativas2.style.display = "none";
    arrow2.innerHTML = "arrow_drop_down";
    arrow2.style.marginTop = "-10%";
  }

  if(e === 7){
    paragrafo1Div2.innerHTML = option2;
    alternativas2.style.display = "none";
    arrow2.innerHTML = "arrow_drop_down";
    arrow2.style.marginTop = "-10%";
  }

  if(e === 8){
    paragrafo1Div2.innerHTML = option3;
    alternativas2.style.display = "none";
    arrow2.innerHTML = "arrow_drop_down";
    arrow2.style.marginTop = "-10%";
  }

  if(e === 9){
    paragrafo1Div2.innerHTML = option4;
    alternativas2.style.display = "none";
    arrow2.innerHTML = "arrow_drop_down";
    arrow2.style.marginTop = "-10%";
  }

  if(e === 10){
    paragrafo1Div2.innerHTML = option5;
    arrow2.style.marginTop = "-20%";
    alternativas2.style.display = "none";
    arrow2.innerHTML = "arrow_drop_down";
  }

  if(e === 11){
    paragrafo1Div3.innerHTML = option1;
    alternativas3.style.display = "none";
    arrow3.innerHTML = "arrow_drop_down";
    arrow3.style.marginTop = "-10%";
  }

  if(e === 12){
    paragrafo1Div3.innerHTML = option2;
    alternativas3.style.display = "none";
    arrow3.innerHTML = "arrow_drop_down";
    arrow3.style.marginTop = "-10%";
  }

  if(e === 13){
    paragrafo1Div3.innerHTML = option3;
    alternativas3.style.display = "none";
    arrow3.innerHTML = "arrow_drop_down";
    arrow3.style.marginTop = "-10%";
  }

  if(e === 14){
    paragrafo1Div3.innerHTML = option4;
    alternativas3.style.display = "none";
    arrow3.innerHTML = "arrow_drop_down";
    arrow3.style.marginTop = "-10%";
  }

  if(e === 15){
    paragrafo1Div3.innerHTML = option5;
    arrow3.style.marginTop = "-20%";
    alternativas3.style.display = "none";
    arrow3.innerHTML = "arrow_drop_down";
  }

  if(e === 16){
    paragrafo1Div4.innerHTML = option1;
    alternativas4.style.display = "none";
    arrow4.innerHTML = "arrow_drop_down";
    arrow4.style.marginTop = "-10%";
  }

  if(e === 17){
    paragrafo1Div4.innerHTML = option2;
    alternativas4.style.display = "none";
    arrow4.innerHTML = "arrow_drop_down";
    arrow4.style.marginTop = "-10%";
  }

  if(e === 18){
    paragrafo1Div4.innerHTML = option3;
    alternativas4.style.display = "none";
    arrow4.innerHTML = "arrow_drop_down";
    arrow4.style.marginTop = "-10%";
  }

  if(e === 19){
    paragrafo1Div4.innerHTML = option4;
    alternativas4.style.display = "none";
    arrow4.innerHTML = "arrow_drop_down";
    arrow4.style.marginTop = "-10%";
  }

  if(e === 20){
    paragrafo1Div4.innerHTML = option5;
    arrow4.style.marginTop = "-20%";
    alternativas4.style.display = "none";
    arrow4.innerHTML = "arrow_drop_down";
  }

  if(e === 21){
    paragrafo1Div5.innerHTML = option1;
    alternativas5.style.display = "none";
    arrow5.innerHTML = "arrow_drop_down";
    arrow5.style.marginTop = "-10%";
  }

  if(e === 22){
    paragrafo1Div5.innerHTML = option2;
    alternativas5.style.display = "none";
    arrow5.innerHTML = "arrow_drop_down";
    arrow5.style.marginTop = "-10%";
  }

  if(e === 23){
    paragrafo1Div5.innerHTML = option3;
    alternativas5.style.display = "none";
    arrow5.innerHTML = "arrow_drop_down";
    arrow5.style.marginTop = "-10%";
  }

  if(e === 24){
    paragrafo1Div5.innerHTML = option4;
    alternativas5.style.display = "none";
    arrow5.innerHTML = "arrow_drop_down";
    arrow5.style.marginTop = "-10%";
  }

  if(e === 25){
    paragrafo1Div5.innerHTML = option5;
    arrow5.style.marginTop = "-20%";
    alternativas5.style.display = "none";
    arrow5.innerHTML = "arrow_drop_down";
  }
}

////// FUNÇÃO QUE GERA O RESULTADO ////////////
function geraResultado(){
  const option1 = "Artigo científico";
  const option2 = "Monografia";
  const option3 = "Relatório técnico";
  const option4 = "Resumo e resenha";
  const option5 = "Trabalho de Conclusão de Curso (TCC)";

  let paragrafoDiv1 = document.getElementById('texto-option1-div1').innerText;
  let paragrafoDiv2 = document.getElementById('texto-option1-div2').innerText;
  let paragrafoDiv3 = document.getElementById('texto-option1-div3').innerText;
  let paragrafoDiv4 = document.getElementById('texto-option1-div4').innerText;
  let paragrafoDiv5 = document.getElementById('texto-option1-div5').innerText;

  let resultadoDiv1 = document.getElementById('resultado-div1');
  let resultadoDiv2 = document.getElementById('resultado-div2');
  let resultadoDiv3 = document.getElementById('resultado-div3');
  let resultadoDiv4 = document.getElementById('resultado-div4');
  let resultadoDiv5 = document.getElementById('resultado-div5');

  let imagem1 = document.getElementById('resultadoImg1');
  let imagem2 = document.getElementById('resultadoImg2');
  let imagem3 = document.getElementById('resultadoImg3');
  let imagem4 = document.getElementById('resultadoImg4');
  let imagem5 = document.getElementById('resultadoImg5');

  if(paragrafoDiv1 === "" || paragrafoDiv2 === "" || 
     paragrafoDiv3 === "" || paragrafoDiv4 === "" || 
     paragrafoDiv5 === ""){

      alert("Por favor, selecione todas as respostas.");
  }else{
    resultadoDiv1.style.display = "block";
    resultadoDiv2.style.display = "block";
    resultadoDiv3.style.display = "block";
    resultadoDiv4.style.display = "block";
    resultadoDiv5.style.display = "block";
  }

  if(paragrafoDiv1 === option4){
    imagem1.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem1.setAttribute('src', '/assets/13_errado.svg');
  }

  if(paragrafoDiv2 === option3){
    imagem2.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem2.setAttribute('src', '/assets/13_errado.svg');
  }

  if(paragrafoDiv3 === option1){
    imagem3.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem3.setAttribute('src', '/assets/13_errado.svg');
  }

  if(paragrafoDiv4 === option2){
    imagem4.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem4.setAttribute('src', '/assets/13_errado.svg');
  }

  if(paragrafoDiv5 === option5){
    imagem5.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem5.setAttribute('src', '/assets/13_errado.svg');
  }

}