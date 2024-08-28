function validateInput() {
    const inputText = document.getElementById('inputText').value;
    document.querySelector('button[onclick="encryptText()"]').disabled = !inputText;
    document.querySelector('button[onclick="decryptText()"]').disabled = !inputText;
}

function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('outputText').value = decryptedText;
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999);  // Para móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
