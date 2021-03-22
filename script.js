function onTextareaContentChange(event) {
  const textarea = event.target;
  const counter = document.getElementById('counter');

  const newCount = 500 - textarea.value.length;
  counter.innerText = newCount;
}

function bindOnChangeToTextareaCounter() {
  const textarea = document.getElementById('textarea');
  textarea.addEventListener('input', onTextareaContentChange);
}

function onChangeAgreementCheck(event) {
  const submitFormBtn = document.getElementById('submit-btn');
  const isChecked = event.target.checked;

  if (isChecked) {
    submitFormBtn.disabled = false;
  } else {
    submitFormBtn.disabled = true;
  }
}

function bindEnableSubmitOnAgreementCheck() {
  const checkAgreed = document.getElementById('agreement');
  checkAgreed.addEventListener('change', onChangeAgreementCheck);
}

function createParagraph(label, content) {
  const p = document.createElement('p');
  p.innerText = `${label}: ${content}`;
  return p;
}

function getInputFields() {
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const house = document.getElementById('house');

  const family = Array.from(document.querySelectorAll('.family')).find((radio) => radio.checked);
  const subjects = Array.from(document.querySelectorAll('.subject'))
    .filter((checkbox) => checkbox.checked);

  const evaluation = Array.from(document.querySelectorAll('.evaluation'))
    .find((radio) => radio.checked);
  const textArea = document.getElementById('textarea');

  return { name, lastName, email, house, family, subjects, evaluation, textArea };
}

function onSubmitForm(event) {
  event.preventDefault();
  const { name, lastName, email, house, family, subjects, evaluation, textArea } = getInputFields();
  const subjectNames = subjects.map((subject) => subject.value).join(', ');

  event.target.innerHTML = '';

  event.target.appendChild(createParagraph('Nome', `${name.value} ${lastName.value}`));
  event.target.appendChild(createParagraph('Email', email.value));
  event.target.appendChild(createParagraph('Casa', house.value));
  event.target.appendChild(createParagraph('Família', family.value));
  event.target.appendChild(createParagraph('Matérias', subjectNames));
  event.target.appendChild(createParagraph('Avaliação', evaluation.value));
  event.target.appendChild(createParagraph('Observações', textArea.value));
}

function bindOnSubmitFormEvent() {
  const form = document.getElementById('evaluation-form');
  form.addEventListener('submit', onSubmitForm);
}

function onClickHeaderBtn() {
  const login = document.getElementById('login-input');
  const password = document.getElementById('password-input');

  const defaultLogin = 'tryber@test.com';
  const defaultPassword = '123456';

  if (login.value === defaultLogin && password.value === defaultPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }

  login.value = '';
  password.value = '';
}

function bindOnClickHeaderBtn() {
  const loginBtn = document.getElementById('login-btn');
  loginBtn.addEventListener('click', onClickHeaderBtn);
}

function execBindEvents() {
  bindOnChangeToTextareaCounter();
  bindEnableSubmitOnAgreementCheck();
  bindOnSubmitFormEvent();
  bindOnClickHeaderBtn();
}

window.onload = () => {
  execBindEvents();

  const submitFormBtn = document.getElementById('submit-btn');
  submitFormBtn.disabled = true;
};
