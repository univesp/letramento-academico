let tabela = document.querySelector('#tabela-citacao');

//Carrega a tabela com uma citação para preencher
$(document).ready(function(){
    let criaBox = criaCaixa();

    tabela.appendChild(criaBox);
});

//Adiciona citação
function addCitacao(){
    let criaBox = criaCaixa();

    tabela.appendChild(criaBox);
}

//Apaga todas as citações
function deleteRows(){
  $('.row-citacao').remove();
}

//Apaga citação clicada
$("#tabela-citacao").on('click', '.apaga-citacao', function(){
  // Remove o bloco pai
  $(this).parents(".row-citacao").remove();
});



//Cria a citação
let criaCaixa = function(){
    let row = document.createElement('tr');
    row.classList.add('row-citacao');

    for (let index = 0; index < 3; index++) {

        let content = document.createElement('td');

        let areaTexto = document.createElement('textarea');
        areaTexto.setAttribute('placeholder', 'Digite seu texto aqui.');

        content.appendChild(areaTexto);            
        
        row.appendChild(content);
        
    }

    let apagaUnicaCitacao = document.createElement('div');
    apagaUnicaCitacao.classList.add('apaga-citacao');    
    apagaUnicaCitacao.innerHTML = '<i class="fa fa-trash fa-lg"></i>';

    row.appendChild(apagaUnicaCitacao);

    return row;
}