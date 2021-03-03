### Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

---

# Boas vindas ao repositório do projeto Trybewarts Wizarding School :mage:!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
  - [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
  - [Dicas](#dicas)
- [Como desenvolver](#como-desenvolver)
- [Observações técnicas](#observações-técnicas)
- [ESLint](#eslint)
- [Requisitos do projeto](#requisitos-do-projeto)
- [Lista de requisitos obrigatórios](#lista-de-requisitos-obrigatórios)
  - [1. Crie uma barra verde na parte superior da página](#1-crie-uma-barra-verde-na-parte-superior-da-página)
  - [2. Posicione o logotipo da Trybewarts no canto esquerdo na barra superior](#2-posicione-o-logotipo-da-trybewarts-no-canto-esquerdo-na-barra-superior)
  - [3. Crie um título "Trybewarts" dentro do `Header`](#3-crie-um-título-Trybewarts-dentro-do-Header)
  - [4. Crie campos de login, senha e um botão no canto direito na barra superior](#4-crie-campos-de-login-senha-e-um-botão-no-canto-direito-na-barra-superior)
  - [5. Adicione um formulário no lado esquerdo da página](#5-adicione-um-formulário-no-lado-esquerdo-da-página)
  - [6. Crie uma classe para o formulário do requisito 5](#6-Crie-uma-classe-para-o-formulário-do-requisito-5)
  - [7. Adicione a logo da Trybewarts no lado direito da página](#7-adicione-a-logo-da-Trybewarts-no-lado-direito-da-página)
  - [8. No formulário, crie inputs  de 'Nome:', 'Sobrenome:' e 'Email'](#8-no-formulário-crie-inputs-de-Nome-Sobrenome-e-Email)
  - [9. Crie um select 'Casa' contendo três options](#9-crie-um-select-Casa-contendo-três-options)
  - [10. Alinhe os campos de 'Nome' e 'Sobrenome' para que fiquem em linha](#10-alinhe-os-campos-de-Nome-e-Sobrenome-para-que-fiquem-em-linha)
  - [11. Alinhe os campos de 'Email' e 'Casa' para que fiquem em linha](#11-alinhe-os-campos-de-Email-e-Casa-para-que-fiquem-em-linha)
  - [12. Crie um campo de entrada para qual família a pessoa estudante se identificado](#12-crie-um-campo-de-entrada-para-qual-família-a-pessoa-estudante-se-identificado)
  - [13. Crie campos de entrada do tipo 'checkbox' contendo seis opções](#13-crie-campos-de-entrada-do-tipo-checkbox-contendo-seis-opções)
  - [14. Crie campo de entrada para avaliar de 1 a 10 o nível de satisfação com a Trybewarts](#14-crie-campo-de-entrada-para-avaliar-de-1-a-10-o-nível-de-satisfação-com-a-Trybewarts)
  - [15. Crie uma textarea contendo o número máximo de caracteres posicionado logo abaixo](#15-crie-uma-textarea-contendo-o-número-máximo-de-caracteres-posicionado-logo-abaixo)
  - [16. O contador, contendo o número de caracteres, devera ser atualizado a medida que algo for digitado na textarea](#16-o-contador-contendo-o-número-de-caracteres-devera-ser-atualizado-a-medida-que-algo-for-digitado-na-textarea)
  - [17. Crie um campo de entrada do tipo 'checkbox' para validar as informações](#17-crie-um-campo-de-entrada-do-tipo-checkbox-para-validar-as-informações)
  - [18. Crie um botão de Enviar](#18-crie-um-botão-de-Enviar)
  - [19. O botão 'Enviar' deverá ser ativado somente após a checkbox do requisito 18 ser selecionada](#19-o-botão-Enviar-deverá-ser-ativado-somente-após-a-checkbox-do-requisito-18-ser-selecionada)
  - [20. Crie um rodapé no final da página](#20-crie-um-rodapé-no-final-da-página)
  - [Requisito Bônus](#requisito-bônus)
- [Avisos finais](#avisos-finais)

---

## Habilidades

Neste projeto, verificamos se você é capaz de:

  * Criar formulários em HTML;

  * Utilizar CSS Flexbox para criar layouts flexíveis;

  * Criar regras CSS específicas para serem aplicadas a dispositivos móveis;

  * Construir páginas que alteram o seu layout de acordo com a orientação da tela;

---

## Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/fundamentals/git) sempre que precisar!

### O que deverá ser desenvolvido

Neste projeto, você irá desenvolver uma página de formulário da Escola de Magia de Trybewarts, em que as pessoas estudantes poderão enviar seus feedbacks sobre a escola. O tema desse projeto é baseado na obra 'Harry Potter', de J. K. Rowling, já que programar é o mais próximo que podemos chegar de algo *verdadeiramente mágico*! Mas não se preocupe se não tiver conhecimento sobre o universo da obra original, pois criamos nossa própria versão da Escola de Bruxaria e você terá todas as informações necessárias para a construção do projeto nesse _readme_!  

### Desenvolvimento

⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️

O seu Pull Request deverá conter os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código HTML, CSS e JavaScript, respectivamente.

Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a monitoria.

### Data de Entrega

    - Projeto em dupla.

    - Será um dia de projeto.

    - O projeto tem até a seguinte data: `DD/MM/YYYY - 14:00h`. Para ser entregue a avaliação final.

---

## Instruções para entregar seu projeto:

### Antes de começar a desenvolver:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-0x-project-hogwarts-nps-form.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-0x-project-hogwarts-nps-form`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-trybewarts-project`

3. Crie na raiz do projeto os arquivos que você precisará desenvolver:
  * Verifique que você está na raiz do projeto
    * Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/joaozinho/code/**sd-0x-project-hogwarts-nps-form**_
  * Crie os arquivos index.html, style.css e script.js
    * Exemplo: `touch index.html style.css script.js`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-trybewarts-project`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-project-hogwarts-nps-form/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-project-hogwarts-nps-form/pulls) e confira que o seu _Pull Request_ está criado

---

### Durante o desenvolvimento

* Faça `commits` das alterações que você fizer no código regularmente;

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;

* Os comandos que você utilizará com mais frequência são:

  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

  2. `git add` _(para adicionar arquivos ao stage do Git)_;

  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

---

### Depois de terminar o desenvolvimento (opcional)

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um vídeo explicativo](https://vimeo.com/362189205).

### Dicas

- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta `/projetos/hogwarts-nps-form`.

---

## Como desenvolver

Você irá desenvolver este projeto em **dupla** e é fundamental que siga as instruções do repositório.

Todos os requisitos tem como base a página a seguir, que representa um formulário de avaliação da **Escola de Magia de Trybewarts**. Use a imagem do site como base e respeite o posicionamento dos elementos, mas quanto às cores e elementos de design que não interfiram nesses aspectos sinta-se livre para deixar a sua criatividade fluir!

![Página da Trybewarts](./pagina-principal.png)

---

### Observações técnicas

Algumas coisas devem seguir um padrão pré-estabelecido para que os teste de correção funcionem corretamente.

⚠️ Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

⚠ **Alguns requisitos pedem para utilizar flex box. Tenha atenção no que é solicitado caso vá usar algum framework CSS para que o requisitos sejam atendidos.** ⚠

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

* Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

  * #### ⚠️ Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução. ⚠️

* Atente-se para o tamanho das imagens que você utilizará neste projeto. **Não utilize imagens com um tamanho maior que _500Kb_.**
  * #### ⚠️ Utilize uma ferramenta [como esta](https://picresize.com/pt) para redimensionar as imagens. ⚠️

  * Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensiona-las para um tamanho menor.

* Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**.

  * Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  * Na página que se abrirá, procure pela linha _**"Cypress evaluator step"**_ e clique nela;

  * Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

  * Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252) ou procure a monitoria.

* Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.

  * Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.

* Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._

---

## ESLint
⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos _checks_ do **ESLint**.

---

## Requisitos do projeto

Caso você faça o download de bibliotecas externas, utilize o diretório libs (a partir da raiz do projeto) para colocar os arquivos (*.css, *.js, etc...) baixados.

### Lista de requisitos obrigatórios:

### 1. Crie uma barra verde na parte superior da página

  Pontos importantes:
  * A barra deve ter a id `top-bar`
  * O id `top-bar` deve determinar que o elemento é um flex container
  * O id `top-bar` deve possuir a propriedade `background-color: r#32a791`

### 2. Posicione o logotipo da Trybewarts no canto esquerdo na barra superior

  Pontos importantes:
  * Deve existir um elemento `img` com a id `trybewarts-logo`
  * Esse elemento `img` deverá ter o atributo `alt` com o valor `trybewarts-logo`
  * O logotipo deve estar alinhado a esquerda dentro da barra verde
  * O atributo `src` do logotipo deve apontar para `"images/trybewarts-logo.png"`

### 3. Crie um título "Trybewarts" dentro do `Header`

Pontos importantes:
  * Deverá conter uma tag `<h1>` com o título
  * O título deverá estar centralizado na barra verde

### 4. Crie campos de login, senha e um botão no canto direito na barra superior

  Pontos importantes:
  * Os inputs deverão conter um placeholder contendo as palavras *'Login'* e *'Senha'* em seus respectivos campos
  * O nome do botão deverá conter a palavra *'Entrar'*
  * Ao clicar no botão, um alerta deverá ser emitido na página, contendo o texto *"Olá, Tryber!"*

### 5. Adicione um formulário no lado esquerdo da página

  Pontos importantes:
  * O formulário deve estar alinhado à esquerda, no body do HTML
  * O formulário deve conter o id `trybewarts-form`
  * O formulário deve ser um flex container

### 6. Crie uma classe para o formulário do requisito 5 

  Pontos importantes:
  * Essa classe deverá se chamar `form-group`
  * Essa classe deverá possuir a propriedade `display: flex`
  * Alinhe o eixo principal dessa classe para ser o eixo vertical

### 7. Adicione a logo da Trybewarts no lado direito da página

  Pontos importantes:
  * A logo deve possuir um height de `100%`
  * O atributo `src` do logotipo deve apontar para ``images/trybewarts-logo.png``

### 8. No formulário, crie inputs de 'Nome:', 'Sobrenome:' e 'Email'

  Pontos importantes:
  * Os inputs deverão conter um placeholder com *'Nome'*, *'Sobrenome'* e *'Email'* em seus respectivos campos

### 9. Crie um select 'Casa' contendo três options

  Pontos importantes:
  * Deverá conter a opção `Gitnória`
  * Deverá conter a opção `Reactpuff`
  * Deverá conter a opção `Corvinode`
  * Deverá conter a opção `Pytherina`

### 10. Alinhe os campos de 'Nome' e 'Sobrenome' para que fiquem em linha

  Pontos importantes:
  * Os campos de *'Name'* e *'Last Name'* devem estar lado a lado

### 11. Alinhe os campos de 'Email' e 'Casa' para que fiquem em linha

  Pontos importantes:
  * Os campos de *'Email'* e *'Casa'* devem estar lado a lado

### 12. Crie um campo de entrada para qual família a pessoa estudante se identificado

  Pontos importantes:
  * Um rótulo (label) com o id `label-family` e o texto *"Qual sua família?"* deverá ser criado
  * O campo deve ser formado por três radio buttons com as opções *"Frontend"*, *"Backend"* e *"FullStack"*
  * Os radio buttons devem ter o atributo `name` com o valor *"family"*
  * Posicione os radio buttons para ficar abaixo um do outro
  * Posicione os radio buttons abaixo do label

### 13. Crie campos de entrada do tipo 'checkbox' contendo seis opções

  Pontos importantes:
  * Um rótulo (label) com o id `label-content` e o texto *"Qual conteúdo você está com mais vontade de aprender?"* deverá ser criado
  * O campo deve ser formado por seis checkbox com as seguintes opções: *Higher Order Function*, *Jest*, *Promises*, *React*, *SQL* e *Python*
  * As checkbox devem ter o atributo `value` com o mesmo nome do campos
  * Posicione as checkbox para ficar lado a lado
  * Posicione as checkbox a abaixo do label

### 14. Crie campo de entrada para avaliar de 1 a 10 o nível de satisfação com a Trybewarts

  Pontos importantes:
  * Um rótulo (label) com o id `label-rate` e o texto *"Como você avalia a Trybewarts?"* deverá ser criado
  * O campo deve ser formado por dez radio buttons, contendo as opções de 1 a 10
  * Os radio buttons devem ter o atributo `name` com o valor *"rate"*
  * Posicione os radio buttons para ficar lado a lado
  * Posicione os radio buttons a abaixo do label

### 15. Crie uma textarea contendo o número máximo de caracteres posicionado logo abaixo

  Pontos importantes:
  * Um rótulo (label) com o id `textarea` e o texto *"Deixe seu comentário:"* deverá ser criado
  * O campo `textarea` deverá ter o máximo de 500 caracteres
  * O número máximo de caracteres, 500, deverá estar localizado abaixo da `textarea`

### 16. O contador, contendo o número de caracteres, devera ser atualizado a medida que algo for digitado na textarea

  Pontos importantes:
  * O contador deverá decrementar a medida que algo for escrito no campo `textarea`
  * O contador deverá incrementar a medida que algo for deletado no campo `textarea`

### 17. Crie um campo de entrada do tipo 'checkbox' para validar as informações

  Pontos importantes:
  * Um rótulo (label) com o id `label-infos` e o texto *"Você concorda com o uso das informações acima?"* deverá ser criado
  * O campo deve ser formado por um checkbox
  * A checkbox deverá ter o atributo `value` chamado *'infos'*
  * Posicione a checkbox ao lado da label

### 18. Crie um botão de Enviar

  Pontos importantes:
  * Um botão do tipo `submit` deverá ser criado
  * Deverá conter o texto *'Enviar'*

### 19. O botão 'Enviar' deverá ser ativado somente após a checkbox do requisito 18 ser selecionada

  Pontos importantes:
  * O botão deverá estar desabilitado caso a checkbox não esteja selecionada
  * O botão deverá ser habilitado caso a checkbox seja selecionada

### 20. Crie um rodapé no final da página

  Pontos importantes:
  * O rodapé deverá conter o texto *"Direitos reservados à Trybewarts©"*

### Requisito Bônus

Esse requisito **não** é verificável pelo avaliador automático. Sua apresentação **(opcional)** será realizada durante o fechamento do dia seguinte ao final do projeto

**Realize o desenvolvimento da versão mobile do formulário Trybewarts.**

---

# Avisos finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
