function geraResultado(numero){

  let justificativa1 = document.getElementById('justificativaExe3_1');
  let justificativa2 = document.getElementById('justificativaExe3_2');
  let justificativa3 = document.getElementById('justificativaExe3_3');
  let justificativa4 = document.getElementById('justificativaExe3_4');
  let justificativa5 = document.getElementById('justificativaExe3_5');
  let justificativa6 = document.getElementById('justificativaExe3_6');
  let justificativa7 = document.getElementById('justificativaExe3_7');
  let justificativa8 = document.getElementById('justificativaExe3_8');
  let justificativa9 = document.getElementById('justificativaExe3_9');

  document.querySelectorAll(".exe3-card").forEach(el=>{
    if(numero === 1 || numero === 2){
      justificativa1.style.display = "block"
    }
    if(numero === 3 || numero === 4){
      justificativa2.style.display = "block"
    }
    if(numero === 5 || numero === 6){
      justificativa3.style.display = "block"
    }
    if(numero === 7 || numero === 8){
      justificativa4.style.display = "block"
    }
    if(numero === 9 || numero === 10){
      justificativa5.style.display = "block"
    }
    if(numero === 11 || numero === 12){
      justificativa6.style.display = "block"
    }
    if(numero === 13 || numero === 14){
      justificativa7.style.display = "block"
    }
    if(numero === 15 || numero === 16){
      justificativa8.style.display = "block"
    }
    if(numero === 17 || numero === 18){
      justificativa9.style.display = "block"
    }
    
  })
}

function changeColor(e){
  let string = Math.ceil(e/2);   

  let color1 = document.getElementById('card-v' + string);
  let color2 = document.getElementById('card-f' + string);
  color1.style.backgroundColor = "#9fffff";
  color1.disabled = true;
  color1.style.cursor = "default";
  color1.style.color = "#121212";
  color2.disabled = true;
  color2.style.cursor = "default";
  color2.style.backgroundImage = "none";
}

function changeColorFalse(e){
  let string = Math.ceil(e/2);

  let color1 = document.getElementById('card-v' + string);
  let color2 = document.getElementById('card-f' + string);
  color2.style.backgroundColor = "#ff9cff";
  color2.disabled = true;
  color2.style.cursor = "default";
  color2.style.color = "#121212";
  color1.disabled = true;
  color1.style.cursor = "default";
  color1.style.backgroundImage = "none";
}