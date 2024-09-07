function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa" para exibir os resultados.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
     // se campoPesquisa for uma string sem nada
     if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhuma Marca Esportiva foi encontrada. Você precisa digitar o nome de uma Marca Esportiva específica ou algo relacionado!</p>"
          return

     }
     campoPesquisa = campoPesquisa.toLowerCase()
  
    // inicia ums String vazia para armazenar resultados.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tegs = "";
  
    // Itera sobre cada resultado da pesquisa (objeto `dado`) na lista `dados`.
    // A lista `dados` deve ser preenchida previamente com os resultados da pesquisa.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()


      // se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `<div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais Informações</a>
      </div>`;
         }

    
      }

      if (!resultados) {
         resultados = "<p>Nada foi encontrado</p>"
      }
      // Cria uma div para cada resultado, formatando-a com o título, descrição e link.
      // O template literal (``) permite a inserção de variáveis diretamente no HTML.
      
   
    // Atualiza o conteúdo HTML do elemento "resultados-pesquisa" com os resultados formatados.
    // Substitui todo o conteúdo anterior do elemento pela nova lista de resultados.
    section.innerHTML = resultados;
  }



