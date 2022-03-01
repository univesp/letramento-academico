  let click;
  let click2;
  let click3;
  let click4;
  let click5;
  let click6;
  let click7;
  let click8;
  let click9;

function geraResultado(){
  let resultado = document.querySelectorAll('.justificativa-exe3');

  if(click && click2 && click3 && click4 && click5 && click6 && click7 && click8 && click9){
    resultado.forEach(element => {
      element.style.display = "block";
    }); 
  }else{
    alert('Selecione uma alternativa para cada caixa de texto.')
  }
}

function toggleResposta(numero){

  let idAlternativa1V  = document.getElementById('card-v1');
  let idAlternativa1F  = document.getElementById('card-f1');
  let idAlternativa2V  = document.getElementById('card-v2');
  let idAlternativa2F  = document.getElementById('card-f2');
  let idAlternativa3V  = document.getElementById('card-v3');
  let idAlternativa3F  = document.getElementById('card-f3');
  let idAlternativa4V  = document.getElementById('card-v4');
  let idAlternativa4F  = document.getElementById('card-f4');
  let idAlternativa5V  = document.getElementById('card-v5');
  let idAlternativa5F  = document.getElementById('card-f5');
  let idAlternativa6V  = document.getElementById('card-v6');
  let idAlternativa6F  = document.getElementById('card-f6');
  let idAlternativa7V  = document.getElementById('card-v7');
  let idAlternativa7F  = document.getElementById('card-f7');
  let idAlternativa8V  = document.getElementById('card-v8');
  let idAlternativa8F  = document.getElementById('card-f8');
  let idAlternativa9V  = document.getElementById('card-v9');
  let idAlternativa9F  = document.getElementById('card-f9');

  if(numero === 1){
    idAlternativa1V.style.backgroundColor = "#9fffff";
    idAlternativa1F.style.backgroundColor = "#fff";
    click = true;
  } 
  if(numero === 2){
    idAlternativa1F.style.backgroundColor = "#ff9cff";
    idAlternativa1V.style.backgroundColor = "#fff";
    click = true;
  }

  if(numero === 3){
    idAlternativa2V.style.backgroundColor = "#9fffff";
    idAlternativa2F.style.backgroundColor = "#fff";
    click2 = true;
  } 
  if(numero === 4){
    idAlternativa2F.style.backgroundColor = "#ff9cff";
    idAlternativa2V.style.backgroundColor = "#fff";
    click2 = true;
  }

  if(numero === 5){
    idAlternativa3V.style.backgroundColor = "#9fffff";
    idAlternativa3F.style.backgroundColor = "#fff";
    click3 = true;
  } 
  if(numero === 6){
    idAlternativa3F.style.backgroundColor = "#ff9cff";
    idAlternativa3V.style.backgroundColor = "#fff";
    click3 = true;
  }

  if(numero === 7){
    idAlternativa4V.style.backgroundColor = "#9fffff";
    idAlternativa4F.style.backgroundColor = "#fff";
    click4 = true;
  } 
  if(numero === 8){
    idAlternativa4F.style.backgroundColor = "#ff9cff";
    idAlternativa4V.style.backgroundColor = "#fff";
    click4 = true;
  }

  if(numero === 9){
    idAlternativa5V.style.backgroundColor = "#9fffff";
    idAlternativa5F.style.backgroundColor = "#fff";
    click5 = true;
  } 
  if(numero === 10){
    idAlternativa5F.style.backgroundColor = "#ff9cff";
    idAlternativa5V.style.backgroundColor = "#fff";
    click5 = true;
  }

  if(numero === 11){
    idAlternativa6V.style.backgroundColor = "#9fffff";
    idAlternativa6F.style.backgroundColor = "#fff";
    click6 = true;
  } 
  if(numero === 12){
    idAlternativa6F.style.backgroundColor = "#ff9cff";
    idAlternativa6V.style.backgroundColor = "#fff";
    click6 = true;
  }

  if(numero === 13){
    idAlternativa7V.style.backgroundColor = "#9fffff";
    idAlternativa7F.style.backgroundColor = "#fff";
    click7 = true;
  } 
  if(numero === 14){
    idAlternativa7F.style.backgroundColor = "#ff9cff";
    idAlternativa7V.style.backgroundColor = "#fff";
    click7 = true;
  }

  if(numero === 15){
    idAlternativa8V.style.backgroundColor = "#9fffff";
    idAlternativa8F.style.backgroundColor = "#fff";
    click8 = true;
  } 
  if(numero === 16){
    idAlternativa8F.style.backgroundColor = "#ff9cff";
    idAlternativa8V.style.backgroundColor = "#fff";
    click8 = true;
  }

  if(numero === 17){
    idAlternativa9V.style.backgroundColor = "#9fffff";
    idAlternativa9F.style.backgroundColor = "#fff";
    click9 = true;
  } 
  if(numero === 18){
    idAlternativa9F.style.backgroundColor = "#ff9cff";
    idAlternativa9V.style.backgroundColor = "#fff";
    click9 = true;
  }
}