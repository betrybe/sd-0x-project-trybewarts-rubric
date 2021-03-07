const TOP_BAR_SELECTOR = '.header';
const TRYBEWARTS_LOGO_SELECTOR = 'img.trybewarts-header-logo';
const TRYBEWARTS_HEADER_TITLE = 'h1#trybewarts-header-title';
const TRYBEWARTS_LOGIN_FORM_SELECTOR = 'form.trybewarts-login';
const EVALUATION_FORM = 'form#evaluation-form'
const USER_NAME_INPUT_SELECTOR = 'input#input-name';
const USER_LASTNAME_INPUT_SELECTOR = 'input#input-lastname';
const USER_EMAIL_INPUT_SELECTOR = 'input#input-email';
const HOUSE = [
  'Gitnória',
  'Reactpuff',
  'Corvinode',
  'Pytherina',
];
const LABEL_FAMILY_TEXT = 'Qual sua família?';
const LABEL_CONTENT_TEXT = 'Qual conteúdo você está com mais vontade de aprender?';
const LABEL_RATE_TEXT = 'Como você avalia a Trybewarts?';
const LABEL_TEXTAREA = 'Data de nascimento';

const checkPlaceholder = (elements, placeholder) => (
  elements.some((element) => Cypress.$(element).attr('placeholder') === placeholder)
);

const evaluateOffset = (doc, selector, offsetType) => doc.querySelector(selector).getBoundingClientRect()[`${offsetType}`];

const checkIsRightOf = (elementLeftSelector, elementRightSelector) => {
  cy.document().then((doc) => {
    const elementLeft = {
      left: evaluateOffset(doc, elementLeftSelector, 'left'),
      width: evaluateOffset(doc, elementLeftSelector, 'width'),
    };

    const elementRight = {
      left: evaluateOffset(doc, elementRightSelector, 'left'),
    };

    expect(elementRight.left >= elementLeft.left + elementLeft.width).to.be.true;
  });
};

const checkIsBelowOf = (elementAboveSelector, elementBelowSelector) => {
  cy.document().then((doc) => {
    const elementAbove = {
      top: evaluateOffset(doc, elementAboveSelector, 'top'),
      height: evaluateOffset(doc, elementAboveSelector, 'height'),
    };

    const elementBelow = {
      top: evaluateOffset(doc, elementBelowSelector, 'top'),
      height: evaluateOffset(doc, elementBelowSelector, 'height'),
    };

    expect(elementBelow.top >= elementAbove.top + elementAbove.height).to.be.true;
  });
};

describe('Trybewarts', () => {
  beforeEach(() => {
    cy.visit('./index.html');
  });

  describe('1) Crie uma barra verde na parte superior da página', () => {
    it('Esta barra deve possuir a classe `header`', () => {
      cy.get(TOP_BAR_SELECTOR).should('exist');
    });

    it('A classe header deve determinar que o elemento é um flex container', () => {
      cy.get(TOP_BAR_SELECTOR).should('have.css', 'display', 'flex');
    });

    it('A classe header deve possuir a propriedade `background-color: rgb(50, 167, 145)`', () => {
      cy.get(TOP_BAR_SELECTOR).should('have.css', 'background-color', 'rgb(50, 167, 145)');
    });
  });

  describe('2) A barra superior deve conter o logotipo do Trybewarts no canto esquerdo com a classe trybewarts-header-logo', () => {
    it('O logotipo deve estar alinhado à esquerda dentro da barra verde', () => {
      cy.get(TRYBEWARTS_LOGO_SELECTOR).should('be.leftAligned', TOP_BAR_SELECTOR);
    });

    it('Deve existir um elemento img com a classe trybewarts-header-logo', () => {
      cy.get(TRYBEWARTS_LOGO_SELECTOR).should('exist');
    });

    it('O atributo src do logotipo deve apontar para imgs/trybewarts-logo.png', () => {
      cy.get(TRYBEWARTS_LOGO_SELECTOR).should('have.attr', 'src').should('equal', 'images/trybewarts-header-logo.svg');
    });
  });

  describe('3) A barra superior deve conter um formulário de autenticação no canto direito com um input de login, um de senha e um botão de entrar', () => {
    it('Existe um formulário com a classe trybewarts-login', () => {
      cy.get(TRYBEWARTS_LOGIN_FORM_SELECTOR).should('exist');
    });

    it('O formulário deve estar alinhado à direita dentro da barra verde', () => {
      cy.get(TOP_BAR_SELECTOR).should('have.css', 'justify-content', 'space-between');
    });

    it('Existem dois inputs e um botão dentro do formulário', () => {
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} input`).should(($input) => {
        expect($input).to.have.length(2);
      });
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} button`).should('exist');
    });

    it('Os inputs deverão conter placeholders com as palavras "Login" e "Senha", respectivamente', () => {
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} input`).should(($input) => {
        expect($input[0].placeholder).to.match(/Login/);
        expect($input[1].placeholder).to.match(/Senha/);
      });
    });

    it('O formulário deve ser um flex container', () => {
      cy.get(TRYBEWARTS_LOGIN_FORM_SELECTOR).should('have.css', 'display', 'flex');
    });

    it('Ao clicar no botão com login ou senha inválidos, emite um alerta contendo o texto "Login ou senha inválidos."', () => {
      const stub = cy.stub()
      cy.on('window:alert', stub);
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} button`).click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Login ou senha inválidos.')
        })
    });

    it('Ao clicar no botão com login ou senha válidos, emite um alerta contendo o texto "Olá, Tryber!"', () => {
      const stub = cy.stub()
      cy.on('window:alert', stub);
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} input:nth-child(1)`).type('tryber@betrybe.com');
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} input:nth-child(2)`).type('123456');
      cy.get(`${TRYBEWARTS_LOGIN_FORM_SELECTOR} button`).click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith('Olá, Tryber!')
        })
    });
  });

  describe('4) Crie um título "Trybewarts" centralizado dentro do `Header`', () => {
    it('Deve existir um elemento h1 com o id trybewarts-header-title', () => {
      cy.get(TRYBEWARTS_HEADER_TITLE).should('exist');
    });

    it('O elemento deve possuir o texto "Trybewarts"', () => {
      cy.get(TRYBEWARTS_HEADER_TITLE).should('have.text', 'Trybewarts');
    });

    it('O header deve ter exatamente três elementos filhos', () => {
      cy.get(TOP_BAR_SELECTOR).children().should('have.length', 3)
    });

    it('O filho do meio deve ser o título', () => {
      cy.get(TOP_BAR_SELECTOR).children().eq(1).should('match', TRYBEWARTS_HEADER_TITLE);
    });
  });

  describe('5) Adicione um formulário no corpo da página, posicionado ao lado esquerdo', () => {
    it('Deve existir um formulário com o id `evaluation-form`', () => {
      cy.get(EVALUATION_FORM).should('exist');
    });

    it('O formulário deve estar inserido na tag `main` do HTML', () => {
      cy.get('main').children().eq(0).should('match', EVALUATION_FORM);
    });

    it('Tanto o formulário quanto o `main` devem ser flex containers', () => {
      cy.get('main').should('have.css', 'display', 'flex');
      cy.get(EVALUATION_FORM).should('have.css', 'display', 'flex');
    });

    it('O formulário deve ter uma largura de 675px', () => {
      cy.get(EVALUATION_FORM).should('have.css', 'width', '675px');
    });
  });

  describe('6) Crie uma classe para o formulário do requisito 5 ', () => {
    it('Essa classe deverá se chamar `form-group`', () => {
      cy.get('.form-group').eq(1).should('exist');
    });

    it('Essa classe deverá possuir a propriedade `display: flex`', () => {
      cy.get('.form-group')
        .should('have.css', 'display', 'flex');
    });

    it('Alinhe o eixo principal dessa classe para ser o eixo vertical', () => {
      cy.get('.form-group').should('have.css', 'flex-direction', 'column');
    });
  });

  describe('7) Adicione a logo da Trybewarts no lado direito da página', () => {
    it('A logo deve possuir um height de `100%``', () => {
      cy.get(TRYBEWARTS_LOGO_SELECTOR).should('have.css', 'height,'`100%`);
    });

    it('O atributo `src` do logotipo deve apontar para `images/trybewarts-logo.png`', () => {
      cy.get(TRYBEWARTS_LOGO_SELECTOR).should('have.src', 'images/trybewarts-logo.png');
    });
  });

  describe('8) No formulário, crie inputs de \'Nome:\', \'Sobrenome:\' e \'Email\'', () => {
    it('Inputs de Nome, Sobrenome e Email deverão ser criados', () => {
      cy.get(USER_NAME_INPUT_SELECTOR).should('exist');
      cy.get(USER_LASTNAME_INPUT_SELECTOR).should('exist');
      cy.get(USER_EMAIL_INPUT_SELECTOR).should('exist');
    });

    it('Os inputs deverão conter um placeholder com Nome, Sobrenome e Email em seus respectivos campos', () => {
      cy.get(USER_NAME_INPUT_SELECTOR)
        .should('have.attr', 'placeholder', 'Nome');
      cy.get(USER_LASTNAME_INPUT_SELECTOR)
        .should('have.attr', 'placeholder', 'Sobrenome');
      cy.get(USER_EMAIL_INPUT_SELECTOR)
        .should('have.attr', 'placeholder', 'Email');
    });
  });

  describe('9) Crie um select \'Casa\' contendo três options', () => {
    it('Deverá conter a opção `Gitnória`', () => {
      cy.get(HOUSE).should('exist');
    });
  });

  describe('10) Alinhe os campos de \'Nome\' e \'Sobrenome\' para que fiquem em linha', () => {
    it('Os campos de Nome e Sobrenome devem estar lado a lado', () => {
      cy.get(USER_NAME_INPUT_SELECTOR, USER_LASTNAME_INPUT_SELECTOR)
        .should('have.css', 'flex-direction', 'row');
    });
  });

  describe("11) Alinhe os campos de email e casa para fiquem em linha", () => {
    it('Os campos de Email e Casa devem estar lado a lado', () => {
      checkIsRightOf('#email', '#house');
    });
  });

  describe("12) Crie um campo de entrada para qual família a pessoa estudante se identifica", () => {
    it('Um rótulo (label) com o id "label-family" e o texto "Qual sua família?" deverá ser criado', () => {
      cy.get('#label-family').contains(LABEL_FAMILY_TEXT);
    });

    it('O campo deve ser formado por três radio buttons com as opções "Frontend", "Backend" e "FullStack" - Frontend', () => {
      cy.get('option[name="Família Frontend"]').should('exist');
    });
    it('O campo deve ser formado por três radio buttons com as opções "Frontend", "Backend" e "FullStack" - Backend', () => {
      cy.get('option[name="Família Backend"]').should('exist');
    });
    it('O campo deve ser formado por três radio buttons com as opções "Frontend", "Backend" e "FullStack" - FullStack', () => {
      cy.get('option[name="Família FullStack"]').should('exist');
    });

    it('Os radio buttons devem ter o atributo name com o valor "family"', () => {
      const radioBtns = querySelector('option[name="family"]');
      expect(radioBtns.length).to.equal(3);
    });

    it('Posicione os radio buttons para ficar abaixo um do outro', () => {
      checkIsBelowOf('option[name="Família Frontend"]', 'option[name="Família Backend"]');
      checkIsBelowOf('option[name="Família Backend"]', 'option[name="Família FullStack"]');
    });

    it('Posicione os radio buttons abaixo do label', () => {
      checkIsBelowOf('#label-family', 'option[name="Família Frontend"]');
    });
  });

  describe("13) Crie campos de entrada do tipo 'checkbox' contendo seis opções", () => {
    it('Um rótulo (label) com o id "label-content" e o texto "Qual conteúdo você está com mais vontade de aprender?" deverá ser criado', () => {
      cy.get('#label-content').contains(LABEL_CONTENT_TEXT);
    });

    it('Campo High Order Functions', () => {
      cy.get('input[value="Higher Order Functions"]').contains('Higher Order Functions');
    });

    it('Campo Jest', () => {
      cy.get('input[value="Jest"]').contains('Jest');
    });

    it('Campo Promises', () => {
      cy.get('input[value="Promises"]').contains('Promises');
    });

    it('Campo React', () => {
      cy.get('input[value="React"]').contains('React');
    });

    it('Campo SQL', () => {
      cy.get('input[value="SQL"]').contains('SQL');
    });

    it('Campo Python', () => {
      cy.get('input[value="Python"]').contains('Python');
    });

    it('Posicione os checkbox abaixo do label', () => {
      checkIsBelowOf('#label-content', 'input[value="Higher Order Functions"]');
    });
  });

  describe("14) Crie campo de entrada para avaliar de 1 a 10 o nível de satisfação com a Trybewarts", () => {
    it('Um rótulo (label) com o id label-rate e o texto "Como você avalia a Trybewarts?" deverá ser criado', () => {
      cy.get('#label-rate').contains(LABEL_RATE_TEXT);
    });

    it('O campo deve ser formado por dez radio buttons, contendo as opções de 1 a 10', () => {
      const radioBtns = querySelector('option[name="rate"]');
      expect(radioBtns.length).to.equal(10);
    });

    it('Posicione os radio buttons a abaixo do label', () => {
      checkIsBelowOf('option[value="1"]', '#label-rate')
    });
  });

  describe("15) Crie uma textarea contendo o número máximo de caracteres posicionado logo abaixo", () => {
    it('Um rótulo (label) com o id textarea e o texto "Deixe seu comentário:" deverá ser criado" ', () => {
      cy.get('#textarea').contains(LABEL_TEXTAREA);
    });

    it('O campo `textarea` deverá ter o máximo de 500 caracteres', () => {
      cy.get('textarea').should('have.attr', 'maxlength', '500');
    });

    it('O número máximo de caracteres, 500, deverá estar localizado abaixo da textarea, com o id textarea-count', () => {
      checkIsBelowOf('textarea', '#textarea-count');
    });
  });

  describe("16) O contador, contendo o número de caracteres, devera ser atualizado a medida que algo for digitado na textarea", () => {
    it('Deve existir um contador com o ID "contador"', () => {
      cy.get('#contador').should('exist');
    });

    it('O contador de caracteres deve ser atualizado conforme o conteúdo do textarea muda.', () => {
      cy.get("#contador").contains('500');
      cy.get("#textarea").type('Salve salve família');
      cy.get("#contador").contains('481');
      cy.get('#textarea').clear();
      cy.get("#contador").should('contain', '500');
      cy.get('#textarea').type('Salve salve');
      cy.get("#contador").should('contain', '489');
    });
  });

  describe("17) Crie um campo de entrada do tipo 'checkbox' com o id 'confirmacao' para validar as informações", () => {
    it('Uma label com o id "label-infos" deve possuir o texto "Você concorda com o uso das informações acima?"', () => {
      cy.get("label#label-infos")
        .should('exist')
        .should('have.text', 'Você concorda com o uso das informações acima?');
    });

    it('Um input do tipo checkbox deve existir e deve possuir o id "confirmacao"', () => {
      cy.get('input#confirmacao[type="checkbox"]')
        .should('exist');
    });
  });

  describe('18) Crie um botão de Enviar para submeter o formulário', () => {
    it('Deve existir um botão com o id "form-submit" e o texto "Enviar"', () => {
      cy.get('button#form-submit[type="submit"]')
        .should('exist')
        .should('have.text', 'Enviar');
    });
  });

  describe('19) O botão "Enviar" deverá ser habilitado somente após a checkbox do requisito 18 ser selecionada', () => {
    it('O botão deve inicialmente estar desabilitado', () => {
      cy.get('button#form-submit')
        .should('be.disabled');
    });

    it('Ao marcar o campo de confirmação, o botão de Enviar deve ser habilitado', () => {
      cy.get('input#confirmacao')
        .check();
      cy.get('button#form-submit')
        .should('not.be.disabled');
    });
  });

  describe.only('20) Ao clicar no botão "Enviar", o conteúdo do formulário deve ser substituído pelas informações preenchidas', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'johndoe@trybe.com';
    const house = 'Reactpuff';
    const family = 'Família Backend';
    const rate = '10';
    const observation = 'Maaaaravilhoso';

    function fillForm() {
      cy.visit('./index.html');
      cy.get('#input-name').type(firstName);
      cy.get('#input-lastname').type(lastName);
      cy.get('#input-email').type(email);
      cy.get('#house').check(house);
      cy.get('input[name="family"]').check(family);
      cy.get('.subject')
        .check('React')
        .check('SQL')
        .check('Jest');
      cy.get('input[name="rate"]').check(rate);
      cy.get('#textarea').type(observation);
    }

    beforeEach(() => {
      fillForm();
      cy.get('input#agreement').check();
      cy.get('button#submit-btn').click();
    });

    it('Deve haver um texto no modelo "Nome: John Doe" (substitua John Doe pelo nome e sobrenome preenchido no formulário)', () => {
      cy.get('#evaluation-form')
        .contains(`Nome: ${firstName} ${lastName}`);
    });

    it('Deve haver um texto no modelo "Email: alguem@email.com"', () => {
      cy.get('#evaluation-form')
        .contains(`Email: ${email}`);
    });

    it('Deve haver um texto no modelo "Casa: -Casa marcada-"', () => {
      cy.get('#evaluation-form')
        .contains(`Casa: ${house}`);
    });

    it('Deve haver um texto no modelo "Família: -Família marcada-"', () => {
      cy.get('#evaluation-form')
        .contains(`Família: ${family}`);
    });

    it('Deve haver um texto no modelo "Matérias: -Matérias marcadas-"', () => {
      cy.get('#evaluation-form')
        .contains('Matérias: Jest, React, SQL');
    });

    it('Deve haver um texto no modelo "Avaliação: -Nota marcada-"', () => {
      cy.get('#evaluation-form')
        .contains(`Avaliação: ${rate}`);
    });

    it('Deve haver um texto no modelo "Observações: -Texto preenchido-"', () => {
      cy.get('#evaluation-form')
        .contains(`Observações: ${observation}`);
    });
  });
});
