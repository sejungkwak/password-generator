// HTML DOM
const newPassword = document.getElementById('newPassword');
const copy = document.getElementById('copy');
const length = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generateBtn = document.querySelector('.btn');

// create decimal code for each characters
const uppercaseCharCode = arrayFromLowToHigh(65, 90);
const lowercaseCharCode = arrayFromLowToHigh(97, 122);
const numberCharCode = arrayFromLowToHigh(48, 57);
const symbolCharCode = arrayFromLowToHigh(33, 47)
                        .concat(arrayFromLowToHigh(58, 64))
                        .concat(arrayFromLowToHigh(91, 96))
                        .concat(arrayFromLowToHigh(123, 126));

// generate new password
generateBtn.addEventListener('click', () => {
    const passwordLength = length.value;
    const includeUppercase = uppercase.checked;
    const includeLowercase = lowercase.checked;
    const includeNumbers = numbers.checked;
    const includeSymbols = symbols.checked;
    const password = generatePassword(
        passwordLength,
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols
    );
    newPassword.innerText = password;
})

// copy the password
copy.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const copyPassword = newPassword.innerText;

    textarea.value = copyPassword;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to Clipboard!')
})



function generatePassword(
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
) {
    let charCode = [];
    if (includeUppercase) charCode = charCode.concat(uppercaseCharCode);
    if (includeLowercase) charCode = charCode.concat(lowercaseCharCode);
    if (includeNumbers) charCode = charCode.concat(numberCharCode);
    if (includeSymbols) charCode = charCode.concat(symbolCharCode);

    const passwordCharacters = [];
    for (let i = 0; i < passwordLength; i++) {
        const characterCode = charCode[Math.floor(Math.random() * charCode.length)]
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
};