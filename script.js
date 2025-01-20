var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

var txtValue = txtInput.value;

txtInput.addEventListener("onchange", () => {
    console.log(txtInput.value);
})