$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo

})

/////TOGGLE DAS IMAGENS DOS LIVROS/////
function setHover(id){
  let livro1 = document.getElementById('livro1');
  let livro2 = document.getElementById('livro2');
  let livro3 = document.getElementById('livro3');
  let livro4 = document.getElementById('livro4');

  if(id === livro1){
    livro1.setAttribute('src', '/assets/02_botaosecao01-hover.svg');
  }
  else if(id === livro2){
    livro2.setAttribute('src', '/assets/03_botaosecao02-hover.svg');
  }
  else if(id === livro3){
    livro3.setAttribute('src', '/assets/04_botaosecao03-hover.svg');
  }
  else if(id === livro4){
    livro4.setAttribute('src', '/assets/05_botaosecao04-hover.svg');
  }
  
}

function leaveHover(id){
  let livro1 = document.getElementById('livro1');
  let livro2 = document.getElementById('livro2');
  let livro3 = document.getElementById('livro3');
  let livro4 = document.getElementById('livro4');

  if(id === livro1){
    livro1.setAttribute('src', '/assets/02_botaosecao01.svg');
  }
  else if(id === livro2){
    livro2.setAttribute('src', '/assets/03_botaosecao02.svg');
  }
  else if(id === livro3){
    livro3.setAttribute('src', '/assets/04_botaosecao03.svg');
  }
  else if(id === livro4){
    livro4.setAttribute('src', '/assets/05_botaosecao04.svg');
  }
  
}
/////FIM TOGGLE DAS IMAGENS DOS LIVROS/////


function toggleExpand(){
  let expand01 = document.getElementById('expand1');
  let spanTexto = document.getElementById('expand1').innerText;
  let container = document.getElementById('container-teste');

  if(spanTexto === "expand_more"){
    expand01.innerHTML = "expand_less";
    container.style.display = "grid";
  }else{
    expand01.innerHTML = "expand_more";
    container.style.display = "none";
  }  
}

function toggleExpand2(){
  let expand02 = document.getElementById('expand2');
  let spanTexto2 = document.getElementById('expand2').innerText;
  let container2 = document.getElementById('container-teste2');

  if(spanTexto2 === "expand_more"){
    expand02.innerHTML = "expand_less";
    container2.style.display = "block";
  }else{
    expand02.innerHTML = "expand_more";
    container2.style.display = "none";
  }  
}

