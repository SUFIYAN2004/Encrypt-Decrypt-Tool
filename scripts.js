function encryptText() {
    const shift = 3; // Caesar Cipher shift
    const input = document.getElementById('inputText').value;
    const output = input.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const shiftChar = (code >= 65 && code <= 90) 
                ? String.fromCharCode(((code - 65 + shift) % 26) + 65) 
                : String.fromCharCode(((code - 97 + shift) % 26) + 97);
            return shiftChar;
        }
        return char;
    }).join('');
    document.getElementById('outputText').value = output;
}

function decryptText() {
    const shift = 3; // Caesar Cipher shift
    const input = document.getElementById('inputText').value;
    const output = input.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const shiftChar = (code >= 65 && code <= 90) 
                ? String.fromCharCode(((code - 65 - shift + 26) % 26) + 65) 
                : String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            return shiftChar;
        }
        return char;
    }).join('');
    document.getElementById('outputText').value = output;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
}
