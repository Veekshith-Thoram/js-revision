var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

var txtValue = txtInput.value;

btnTranslate.addEventListener("click", () => {
    console.log(txtInput.value);
})