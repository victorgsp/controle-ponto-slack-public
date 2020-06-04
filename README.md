# Como executar

## Requisitos

 - Npm
 - Nodejs

# Passos

## Preparação

 1. Abra o dev tools do chrome para sua página do slack
 2. Preencha o search do slack com os seguintes valores: 
 **from:**@seu_usuario in:#canal-slack-para-pegar-msg
 3. Encontre a requisição da seguinte requisição na aba network do devtools: https://organizacao.slack.com/api/search.modules...
 **obs:** certifique-se que a requisição é do *module: "messages"* 
 4. Clicando com o botão direito do mouse copie a requisição no formato *"Copy as node js fetch"* 
 5. Substitua todo o fetch do arquivo code/download.js com o conteúdo copiado.
 6. Na propriedade body do fetch procure o valor da página (faça um search por page no body do fetch) e substitua valor (provavelmente vai ser 1) por:
>   **" + index + "**

  **obs:** o valor novo inclui as aspas
  
 7. Outro valor que pode ser modificado no arquivo download.js é a quantidade de páginas (*quantityOfPagesToDownload*) do resultado da pesquisa que serão baixadas. Isso varia de acordo com a quantidade de mensagens mandada por você. Pode fazer uma estimativa da quantidade de páginas olhando o response da requisição do passo 3 no campo *pagination.total_count* no devtools e dividir por 20 (quantidade de items por página).


## Como executar

Rodar os comandos:
> npm i

> npm start
