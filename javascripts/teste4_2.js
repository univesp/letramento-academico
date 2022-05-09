let select1Exe2 = document.getElementById('alternativas1-exe2');
let select2Exe2 = document.getElementById('alternativas2-exe2');
let select3Exe2 = document.getElementById('alternativas3-exe2');

let imagem1Exe2 = document.getElementById('resultadoImg1-exe2');
let imagem2Exe2 = document.getElementById('resultadoImg2-exe2');
let imagem3Exe2 = document.getElementById('resultadoImg3-exe2');


function geraResultado2(){

  let valueSelected1Exe2 = document.getElementById('alternativas1-exe2').value;
  let valueSelected2Exe2 = document.getElementById('alternativas2-exe2').value;
  let valueSelected3Exe2 = document.getElementById('alternativas3-exe2').value;
  
  if(valueSelected1Exe2 !== "" && valueSelected2Exe2 !== "" && valueSelected3Exe2 !== ""){

    //Mostra os icones de certo ou errado
    let iconesResultado = document.querySelectorAll('.resultado-teste-secao4');

    iconesResultado.forEach(e => {
      e.style.display = "block";
    })

    //Seta os icones de certo ou errado de acordo com a resposta
    if(valueSelected1Exe2 === "option1"){
      imagem1Exe2.setAttribute('src', '/assets/12_certo.svg');
    }else{
      imagem1Exe2.setAttribute('src', '/assets/13_errado.svg');
    }

    if(valueSelected2Exe2 === "option5"){
      imagem2Exe2.setAttribute('src', '/assets/12_certo.svg');
    }else{
      imagem2Exe2.setAttribute('src', '/assets/13_errado.svg');
    }

    if(valueSelected3Exe2 === "option9"){
      imagem3Exe2.setAttribute('src', '/assets/12_certo.svg');
    }else{
      imagem3Exe2.setAttribute('src', '/assets/13_errado.svg');
    }

    let expandIconExe2 = document.querySelectorAll('.alternativas-exe4');

    expandIconExe2.forEach(e => {
      e.style.backgroundImage = "none";
    })

    //mosttra as respostas corretas
    let resultadoFrases = document.querySelectorAll('.resultado-exercicio4-2');

    resultadoFrases.forEach(e => {
      e.style.display = "block";
    })

    //ajusta posicionamento dos selects depois de aparecer as respostas
    let selectAfter1 = document.getElementById('selectExe4Box1');
    let selectAfter2 = document.getElementById('selectExe4Box2');
    let selectAfter3 = document.getElementById('selectExe4Box3');

    selectAfter1.style.marginTop = "-40px";
    selectAfter2.style.marginTop = "-40px";
    selectAfter3.style.marginTop = "15px";

    //desabilitando botão depois de finalizar o exercício
    let botao = document.querySelector('#botao-exe4');
    botao.disabled = true;
    botao.style.cursor = "default";

    window.scrollTo(0, 3800);

  }else{
    alert("Por favor, selecione todas as respostas.");
  }
}

// alterando a cor de fundo dos selects
function toggleValueSelect2(){
  
  let valueSelected1Exe2 = document.getElementById('alternativas1-exe2').value;
  let valueSelected2Exe2 = document.getElementById('alternativas2-exe2').value;
  let valueSelected3Exe2 = document.getElementById('alternativas3-exe2').value;

  if(valueSelected1Exe2 !== ""){
    select1Exe2.style.backgroundColor = "#ff9cff";
  }else{
    select1Exe2.style.backgroundColor = "#f2f2f2";
  }

  if(valueSelected2Exe2 !== ""){
    select2Exe2.style.backgroundColor = "#ff9cff";
  }else{
    select2Exe2.style.backgroundColor = "#f2f2f2";
  }

  if(valueSelected3Exe2 !== ""){
    select3Exe2.style.backgroundColor = "#ff9cff";
  }else{
    select3Exe2.style.backgroundColor = "#f2f2f2";
  }
  
}