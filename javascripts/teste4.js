
let select1 = document.getElementById('alternativas1');
let select2 = document.getElementById('alternativas2');
let select3 = document.getElementById('alternativas3');
let select4 = document.getElementById('alternativas4');

function geraResultado(){
  let resultado = document.querySelector('.resultado-secao4');
  let valueSelected1 = document.getElementById('alternativas1').value;
  let valueSelected2 = document.getElementById('alternativas2').value;
  let valueSelected3 = document.getElementById('alternativas3').value;
  let valueSelected4 = document.getElementById('alternativas4').value;

  if(valueSelected1 !== "" || valueSelected2 !== "" || valueSelected3 !== "" || valueSelected4 !== ""){
    resultado.style.display = "block";
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