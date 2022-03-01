function collapseTesteExe2(e){
  let alternativas1 = document.getElementById('alternativas1-exe2');
  let alternativas2 = document.getElementById('alternativas2-exe2');
  let alternativas3 = document.getElementById('alternativas3-exe2');

  let arrowText = document.getElementById('expand-teste1-exe2').innerText;
  let arrow = document.getElementById('expand-teste1-exe2');
  let arrowText2 = document.getElementById('expand-teste2-exe2').innerText;
  let arrow2 = document.getElementById('expand-teste2-exe2');
  let arrowText3 = document.getElementById('expand-teste3-exe2').innerText;
  let arrow3 = document.getElementById('expand-teste3-exe2');
  

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
 
}

function insereTextoExe2(e){
  const option1 = "Citação indireta";
  const option2 = "Citação direta com mais de 3 linhas";
  const option3 = "Citação direta com menos de 3 linhas";

  let paragrafo1Div1 = document.getElementById('texto-option2-div1');
  let paragrafo1Div2 = document.getElementById('texto-option2-div2');
  let paragrafo1Div3 = document.getElementById('texto-option2-div3');

  let alternativas1 = document.getElementById('alternativas1-exe2');
  let alternativas2 = document.getElementById('alternativas2-exe2');
  let alternativas3 = document.getElementById('alternativas3-exe2');

  let arrow = document.getElementById('expand-teste1-exe2');
  let arrow2 = document.getElementById('expand-teste2-exe2');
  let arrow3 = document.getElementById('expand-teste3-exe2');

  if(e === 1){
    paragrafo1Div1.innerHTML = option1;
    alternativas1.style.display = "none";
    arrow.innerHTML = "arrow_drop_down";
  }

  if(e === 2){
    paragrafo1Div1.innerHTML = option2;
    alternativas1.style.display = "none";
    arrow.innerHTML = "arrow_drop_down";
  }

  if(e === 3){
    paragrafo1Div1.innerHTML = option3;
    alternativas1.style.display = "none";
    arrow.innerHTML = "arrow_drop_down";
  }

  if(e === 4){
    paragrafo1Div2.innerHTML = option1;
    alternativas2.style.display = "none";
    arrow2.innerHTML = "arrow_drop_down";
  }

  if(e === 5){
    paragrafo1Div2.innerHTML = option2;
    alternativas2.style.display = "none";
    arrow2.innerHTML = "arrow_drop_down";
  }

  if(e === 6){
    paragrafo1Div2.innerHTML = option3;
    alternativas2.style.display = "none";
    arrow2.innerHTML = "arrow_drop_down";
  }

  if(e === 7){
    paragrafo1Div3.innerHTML = option1;
    alternativas3.style.display = "none";
    arrow3.innerHTML = "arrow_drop_down";
  }

  if(e === 8){
    paragrafo1Div3.innerHTML = option2;
    alternativas3.style.display = "none";
    arrow3.innerHTML = "arrow_drop_down";
  }

  if(e === 9){
    paragrafo1Div3.innerHTML = option3;
    alternativas3.style.display = "none";
    arrow3.innerHTML = "arrow_drop_down";
  }
}

function geraResultado2(){
  const option1 = "Citação indireta";
  const option2 = "Citação direta com mais de 3 linhas";
  const option3 = "Citação direta com menos de 3 linhas";
  const vazio = "Escolha um tipo de citação";

  let paragrafo1Div1 = document.getElementById('texto-option2-div1').innerText;
  let paragrafo1Div2 = document.getElementById('texto-option2-div2').innerText;
  let paragrafo1Div3 = document.getElementById('texto-option2-div3').innerText;

  let resultadoDiv1 = document.getElementById('resultado-div1');
  let resultadoDiv2 = document.getElementById('resultado-div2');
  let resultadoDiv3 = document.getElementById('resultado-div3');

  let imagem1 = document.getElementById('resultadoImg1');
  let imagem2 = document.getElementById('resultadoImg2');
  let imagem3 = document.getElementById('resultadoImg3');

  let arrow = document.getElementById('expand-teste1-exe2');
  let arrow2 = document.getElementById('expand-teste2-exe2');
  let arrow3 = document.getElementById('expand-teste3-exe2');

  let selectDiv = document.querySelectorAll('.select-teste2-secao4');

  let botaoResultado = document.getElementById('botao-exe4');
  let botaoTexto = document.getElementById('botao-exe4').innerText;


  if(paragrafo1Div1 === vazio || paragrafo1Div2 === vazio || paragrafo1Div3 === vazio){
    alert("Por favor, selecione todas as respostas.");
  }else{
    resultadoDiv1.style.display = "block";
    resultadoDiv2.style.display = "block";
    resultadoDiv3.style.display = "block";

    selectDiv.forEach(element =>{
      element.style.backgroundColor = "#ff9cff";
      element.style.cursor = "auto";
    });

    arrow.style.display = "none";
    arrow2.style.display = "none";
    arrow3.style.display = "none";

    botaoResultado.innerHTML = "Tentar novamente";
  }

  if(paragrafo1Div1 === option1){
    imagem1.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem1.setAttribute('src', '/assets/13_errado.svg');
  }

  if(paragrafo1Div2 === option2){
    imagem2.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem2.setAttribute('src', '/assets/13_errado.svg');
  }

  if(paragrafo1Div3 === option3){
    imagem3.setAttribute('src', '/assets/12_certo.svg');
  }else{
    imagem3.setAttribute('src', '/assets/13_errado.svg');
  }


  if(botaoTexto === "Tentar novamente"){
    document.location.reload(true);
  }

}
