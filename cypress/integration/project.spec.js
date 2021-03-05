const TOP_BAR_SELECTOR = '.top-bar';
const TRYBEWARTS_LOGO_SELECTOR = '#trybewarts-logo';
const TRYBEWARTS_LOGIN_FORM_SELECTOR = 'form.trybewarts-login';
const TRYBEWARTS_FORMS_CLASS = 'form.from-group';
const HEIGHT = 100;
const USER_IDENTIFIER_INPUT_SELECTOR = 'input#user-email-phone';
const USER_IDENTIFIER_LABEL_SELECTOR = '#user-email-phone-label';
const USER_PASSWORD_LABEL_SELECTOR = '#user-password-label';
const USER_IDENTIFIER_LABEL_TEXT_SELECTOR = 'Email ou telefone';
const USER_PASSWORD_LABEL_TEXT_SELECTOR = 'Senha';
const USER_NAME_INPUT_SELECTOR = 'input#input-name';
const USER_LASTNAME_INPUT_SELECTOR = 'input#input-lastname';
const USER_EMAIL_INPUT_SELECTOR = 'input#input-email';
const USER_LOGIN_BUTTON_SELECTOR = '#button-login';
const TRYBEWARTS_SLOGAN_SELECTOR = 'p#trybewarts-slogan';
const TRYBEWARTS_SLOGAN = 'O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.';
const TRYBEWARTS_NETWORKING_IMG_SELECTOR = 'img#trybewarts-networking';
const OPEN_ACCOUNT_MESSAGE = 'Abra uma conta';
const QUICK_AND_SIMPLE_MESSAGE = 'É rápido e fácil.';
const ALL_INPUT_SELECTOR = 'input';
const ALL_PASSWORD_INPUT_SELECTOR = 'input[type=password]';
const GENDER_TITLE = 'Gênero';
const HOUSE = [
  'Gitnória',
  'Reactpuff',
  'Corvinode',
  'Pytherina',
];
const REGISTER_BUTTON_SELECTOR = 'button#trybewarts-register';
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

  describe('1) Crie uma barra azul na parte superior da página com a classe top-bar', () => {
    it('Esta barra deve possuir a classe top-bar', () => {
      cy.get(TOP_BAR_SELECTOR).should('exist');
    });

    it('A classe top-bar deve determinar que o elemento é um flex container', () => {
      cy.get(TOP_BAR_SELECTOR).should('have.css', 'display', 'flex');
    });

    it('A classe top-bar deve possuir a propriedade `background-color: rgb(66, 103, 178)`', () => {
      cy.get(TOP_BAR_SELECTOR).should('have.css', 'background-color', 'rgb(66, 103, 178)');
    });
  });

  describe('2) A barra superior deve conter o logotipo do Facebook no canto esquerdo com a classe trybewarts-logo', () => {
    it('O logotipo deve estar alinhado a esquerda dentro da barra azul', () => {
      cy.get(TRYBEWARTS_LOGO_SELECTOR).should('be.leftAligned', '.top-bar');
    });

    it('Deve existir um elemento img com a classe trybewarts-logo', () => {
      cy.get(TRYBEWARTS_LOGO_SELECTOR).should('exist');
    });

    it('O atributo src do logotipo deve apontar para imgs/trybewarts-logo.png', () => {
      cy.get(TRYBEWARTS_LOGO_SELECTOR).should('have.attr', 'src').should('equal', 'imgs/trybewarts-logo.png');
    });
  });

  describe('3) A barra superior deve conter um formulário de autenticação no canto direito', () => {
    it('O formulário deve estar alinhado a direita dentro da barra azul', () => {
      cy.get(TRYBEWARTS_LOGIN_FORM_SELECTOR).should('be.rightAligned', '.top-bar');
    });

    it('Existe formulário possui uma classe chamada trybewarts-login', () => {
      cy.get(TRYBEWARTS_LOGIN_FORM_SELECTOR).should('exist');
    });

    it('O formulário deve ser um flex container', () => {
      cy.get(TRYBEWARTS_LOGIN_FORM_SELECTOR).should('have.css', 'display', 'flex');
    });
  });

  describe('4) Crie uma classe no CSS chamada form-group', () => {
    it('Essa classe deve possuir a propriedade `display: flex`', () => {
      cy.get('.form-group').should('have.css', 'display', 'flex');
    });

    it('Alinhe o eixo principal dessa classe para ser o eixo vertical', () => {
      cy.get('.form-group').should('have.css', 'flex-direction', 'column');
    });
  });

  describe('5) Adicione o primeiro subcontainer com a classe form-group para agrupar o rótulo e campo "E-mail ou telefone" dentro do formulário criado na etapa 3', () => {
    it('Deve haver um container utilizando a classe `form-group` criada no passo anterior', () => {
      cy.get('form.trybewarts-login').children().first()
        .should('exist')
        .should('have.class', 'form-group');
    });

    it('Dentro do container `form-group` criado, deve haver um rótulo com o id user-email-phone-label e o texto "Email ou telefone"', () => {
      cy.get(USER_IDENTIFIER_LABEL_SELECTOR).parent().should('have.class', 'form-group');

      cy.get(USER_IDENTIFIER_LABEL_SELECTOR)
        .should('exist')
        .should('have.text', USER_IDENTIFIER_LABEL_TEXT_SELECTOR);
    });

    it('Dentro do container `form-group` criado, abaixo do rótulo deve haver campo de entrada de texto para receber o email ou o telefone do usuário com o id user-email-phone', () => {
      cy.get(USER_IDENTIFIER_INPUT_SELECTOR).should('exist');

      cy.get(USER_IDENTIFIER_INPUT_SELECTOR).parent().should('have.class', 'form-group');

      checkIsBelowOf(USER_IDENTIFIER_LABEL_SELECTOR, USER_IDENTIFIER_INPUT_SELECTOR);
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

  describe('11) Crie um campo de entrada de texto para o nome do usuário dentro do formulário criado no requisito 10', () => {
    it('O campo deve ter o atributo name com o valor "first-name"', () => {
      cy.get('.main-content form input[name="first-name"]').should('exist');
    });


  describe("11) Alinhe os campos de email e casa para fiquem em linha", () => {
    it('Os campos de Email e Casa devem estar lado a lado', () => {
      checkIsRightOf('#email', '#house');
    });
  })});

  describe('12) Crie um campo de entrada de texto para o sobrenome do usuário dentro do formulário criado no requisito 10', () => {
    it('O campo deve ter o atributo name com o valor "last-name"', () => {
      cy.get('.main-content form input[name="last-name"]').should('exist');

    });

    it('Posicione os radio buttons para ficar abaixo um do outro', () => {
      checkIsBelowOf('option[name="Família Frontend"]', 'option[name="Família Backend"]');
      checkIsBelowOf('option[name="Família Backend"]', 'option[name="Família FullStack"]');
    });

    it('Esse campo deve estar alinhado a direita do campo de Nome', () => {
      checkIsRightOf('.main-content form input[name="first-name"]', '.main-content form input[name="last-name"]');
    });
  });

  describe('13) Crie um campo de entrada de texto para o celular ou email do usuário dentro do formulário criado no requisito 10', () => {
    it('O campo deve ter o atributo name com o valor "phone_email"', () => {
      cy.get('.main-content form input[name="phone_email"]').should('exist');

    });

    it('Campo High Order Functions', () => {
      cy.get('input[value="Higher Order Functions"]').contains('Higher Order Functions');
    });

    it('Posicione esse campo abaixo do campo do nome do usuário', () => {
      checkIsBelowOf('.main-content form input[name="first-name"]', '.main-content form input[name="phone_email"]');

    });

  describe('14) Crie um campo de entrada para senha do usuário dentro do formulário criado no requisito 10', () => {
    it('O campo deve ter o atributo name com o valor "password"', () => {
      cy.get('.main-content form input[name="password"]').should('exist');

    });

    it('Campo SQL', () => {
      cy.get('input[value="SQL"]').contains('SQL');
    });

    it('Campo Python', () => {
      cy.get('input[value="Python"]').contains('Python');
    });


    it('Posicione esse campo abaixo do celular/email', () => {
      checkIsBelowOf('.main-content form input[name="phone_email"]', '.main-content form input[name="password"]');
    });
  });

  describe('15) Crie um campo de entrada para data de nascimento do usuário dentro do formulário criado no requisito 10', () => {
    it('Um rótulo abaixo do campo nova senha com o id label-birth-date e o texto "Data de nascimento" ', () => {
      cy.get('.main-content form label#label-birth-date').contains(BIRTH_DATE_TITLE);
    });

    it('O campo deve ter o atributo name com o valor "birth-date"', () => {
      cy.get('.main-content form input[name="birth-date"]').should('exist');

    });

    it('Posicione os radio buttons a abaixo do label', () => {
      checkIsBelowOf('option[value="1"]', '#label-rate')
    });
  });

  describe("15) Crie uma textarea contendo o número máximo de caracteres posicionado logo abaixo", () => {
    it('Um rótulo (label) com o id textarea e o texto "Deixe seu comentário:" deverá ser criado" ', () => {
      cy.get('#textarea').contains(LABEL_TEXTAREA);
    });

    it('Posicione esse campo abaixo do rótulo', () => {
      checkIsBelowOf('.main-content form label#label-birth-date', '.main-content form input[name="birth-date"]');
    });
  });

  describe('16) Crie um campo de entrada para gênero do usuário dentro do formulário criado no requisito 10', () => {
    it('Um rótulo abaixo do campo nova senha com o id label-gender e o texto "Gênero" ', () => {
      cy.get('.main-content form label#label-gender').contains(GENDER_TITLE);
    });

    it('O campo deve ser formado por três `radio buttons` com as opções "Feminino", "Masculino" e "Personalizado"', () => {
      cy.get('input[type=\'radio\']')
        .should(($radios) => {
          expect($radios).to.have.length(GENRES.length);
          $radios.each((index, radio) => {
            expect(Cypress.$(radio).val()).to.equal(GENRES[index]);
          });
        });
    });

    it('Posicione os radio buttons para ficar na mesma linha', () => {
      const topOptions = [];
      cy.get('input[type=\'radio\']')
        .should(($radios) => {
          $radios.each((index, radio) => {
            topOptions.push(radio.getBoundingClientRect().top);
          });

          expect([...new Set(topOptions)].length).to.equal(1);
        });
    });

    it('Posicione os radio buttons para ficar abaixo do label', () => {
      cy.document().then((doc) => {
        const topOptions = [];
        const topLabel = evaluateOffset(doc, '.main-content form label#label-gender', 'top');
        const heightLabel = evaluateOffset(doc, '.main-content form label#label-gender', 'height');

        cy.get('input[type=\'radio\']')
          .should(($radios) => {
            $radios.each((index, radio) => {
              topOptions.push(radio.getBoundingClientRect().top);
            });

            expect([...new Set(topOptions)][0] >= (topLabel + heightLabel)).to.equal(true);
          });
      });
    });
  });

  describe('17) Crie um botão para finalizar o cadastro dentro do formulário criado no requisito 10', () => {
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

    it('Deve ter a propriedade type igual a submit', () => {
      cy.get(REGISTER_BUTTON_SELECTOR).should('have.attr', 'type').should('equal', 'submit');
    });

  });

  describe('18) Validar se todos os campos foram preenchidos ao clicar no botão "Cadastre-se"', () => {
    it('Exibir uma mensagem "Campos inválidos" dentro do formulário caso pelo menos um campo não esteja preenchido', () => {
      cy.get('input[name="first-name"]').type('John');
      cy.get('input[name="last-name"]').type('Doe');
      cy.get(REGISTER_BUTTON_SELECTOR).click();


    it('Um input do tipo checkbox deve existir e deve possuir o id "confirmacao"', () => {
      cy.get('input#confirmacao[type="checkbox"]')
        .should('exist');
    })
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

  describe('20) Ao clicar no botão "Enviar", o conteúdo do formulário deve ser substituído pelas informações preenchidas', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const phoneEmail = 'johndoe@trybe.com';
    const observation = 'Maaaaravilhoso';

    function fillForm() {
      cy.visit('./index.html');
      cy.get('input[name="first-name"]').type(firstName);
      cy.get('input[name="last-name"]').type(lastName);
      cy.get('input[name="phone_email"]').type(phoneEmail);
      cy.get('input[name="password"]').type(phoneEmail);
      cy.get('input[name="birth-date"]').type(birthDate);
      cy.get('input[name="gender"]').check('Feminino');

    }

    beforeEach(() => {
      fillForm();
      cy.get('input#confirmacao').check();
      cy.get('button#form-submit').click();
    });

    it('Deve haver um texto no modelo "Olá, John Doe" (substitua John Doe pelo nome e sobrenome preenchido no formulário)', () => {
      cy.get('.main-content .right-content')
        .contains(`Olá, ${firstName} ${lastName}`);
    });

    it('Exibir o e-mail ou telefone', () => {
      cy.get('.main-content .right-content')
        .contains(phoneEmail);
    });

    it('Não exibir a senha', () => {
      cy.get('.main-content .right-content').should('not.contain', password);
    });

    it('Exibir a data de nascimento', () => {
      cy.get('.main-content .right-content').contains(birthDate);
    });

    it('Caso a opção selecionada no campo Gênero seja Feminino exibir "Feminino"', () => {
      fillForm();
      cy.get('input[name="gender"]').check('Feminino');
      cy.get(REGISTER_BUTTON_SELECTOR).click();

      cy.get('.main-content .right-content').contains('Feminino');
    });

    it('Caso a opção selecionada no campo Gênero seja Masculino exibir "Masculino"', () => {
      fillForm();
      cy.get('input[name="gender"]').check('Masculino');
      cy.get(REGISTER_BUTTON_SELECTOR).click();

      cy.get('.main-content .right-content').contains('Masculino');

    });
  });

    it('Caso a opção selecionada no campo Gênero seja Personalizado exibir "Personalizado"', () => {
      fillForm();
      cy.get('input[name="gender"]').check('Personalizado');
      cy.get(REGISTER_BUTTON_SELECTOR).click();

      cy.get('.main-content .right-content').contains('Personalizado');

    });
  });
})});
