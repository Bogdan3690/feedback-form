const form = document.querySelector(".js-feedback-form")
const textarea = form.querySelector("textarea")
const FORM_DATA = "formdata"
console.log(textarea);

form.addEventListener("submit", onSubmitForm)

function onSubmitForm(ev) {
    ev.preventDefault()
    const value = textarea.value
    console.log(value);
    form.reset()
    localStorage.removeItem(FORM_DATA)
}

textarea.addEventListener("input", onTextarea)

function onTextarea(ev) {
    const textArea = ev.target
    const valueOfTextarea = textArea.value
    console.log(typeof valueOfTextarea);
    localStorage.setItem(FORM_DATA, valueOfTextarea)

}

function populateData(params) {

    const data = localStorage.getItem(FORM_DATA)
    if(data){
        textarea.value = data
    }
}

populateData()