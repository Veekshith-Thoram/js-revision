var btnTranslate = document.querySelector(".btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output-text");

var serverUrl = "https://api.funtranslaions.com/translate/minion.json";


const getTranslationUrl = (text) => {
    return serverUrl + "?text=" + text; 
}

const errorHandler = error => {
    outputText.innerText = "The server is down, you can try after some time"
}



btnTranslate.addEventListener("click", () => {
    var inputText = txtInput.value;
    if(inputText === "") {
        outputText.innerText = "Please enter text to translate!!"
    } else {
        fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => outputText.innerText = (json.contents.translated))
        .catch(errorHandler)
    }
})