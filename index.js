const form = document.querySelector(".js-feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input");
const FORM_DATA = "formdata";

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(ev) {
  ev.preventDefault();
  const textValue = textarea.value;
  const inputValue = input.value;
  const formData = {
    name: inputValue,
    message: textValue,
  };
  console.log(formData);
  form.reset();
  localStorage.removeItem(FORM_DATA);
}

form.addEventListener("input", onInputChange);

function onInputChange(ev) {
  const formData = {
    name: input.value,
    message: textarea.value,
  };
  console.log(ev.target.name);
  // console.log(formData.name);
  // console.log(formData[ev.target.name]);
  formData[ev.target.name] = ev.target.value;
  console.log(formData);
  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
}

function populateData(params) {
  const data = localStorage.getItem(FORM_DATA);
  if (data) {
    const parseData = JSON.parse(data);
    textarea.value = parseData.message;
    input.value = parseData.name;
  }
}

populateData();
