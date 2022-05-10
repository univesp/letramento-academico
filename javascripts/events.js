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


function toggleExpand(){
  let expand01 = document.getElementById('expand1');
  let spanTexto = document.getElementById('expand1').innerText;
  let expand02 = document.getElementById('expand2');
  let spanTexto2 = document.getElementById('expand2').innerText;

  if(spanTexto === "expand_more"){
    expand01.innerHTML = "expand_less";
  }else{
    expand01.innerHTML = "expand_more";
  }  

  if(spanTexto2 === "expand_less"){
    expand02.innerHTML = "expand_more";
  }  
}

function toggleExpand2(){
  let expand02 = document.getElementById('expand2');
  let spanTexto2 = document.getElementById('expand2').innerText;
  let expand01 = document.getElementById('expand1');
  let spanTexto = document.getElementById('expand1').innerText;
  
  if(spanTexto2 === "expand_more"){
    expand02.innerHTML = "expand_less";

    //scrolla pagina para inicio do teste depois de conferir resultado
    window.scrollTo(0, 2200);
  }else{
    expand02.innerHTML = "expand_more";
  } 
  
  if(spanTexto === "expand_less"){
    expand01.innerHTML = "expand_more";
  }

  
}

