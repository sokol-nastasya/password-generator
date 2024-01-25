const inputDigit = document.getElementById('input_num');
const generatePass = document.getElementById('generate_btn');
const readyPassBlock = document.getElementById('ready_password');

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result = '';

const generateNewPass = (digit) => {
    const charLength = characters.length;

    for (let i=0; i < digit; i++) {
        // result += characters.charAt(Math.floor(Math.random() * charLength));
        result += characters[Math.floor(Math.random() * charLength)];

    }

    return result;

};

const showResult = (newPass) => {
    let title = document.createElement('h2');
    let message = document.createTextNode('Your new password is: ');
    title.appendChild(message);
    readyPassBlock.appendChild(title);

    let newPassword = document.createElement('p');
    newPassword.textContent = result;
    newPassword.setAttribute("id", "password_code");
    readyPassBlock.appendChild(newPassword);

    let copyBtn = document.createElement('button');
    copyBtn.innerHTML = 'Copy';
    copyBtn.setAttribute("id", "copy_btn");
    readyPassBlock.appendChild(copyBtn);
};

generatePass.addEventListener('click', (e)=> {
    e.preventDefault();
    let digits = parseInt(inputDigit.value);

    if(!isNaN(digits) && digits > 0) {
        let newPass = generateNewPass(digits);
        showResult(result);
    } else {
        alert('Please enter valid positive number for password length.');
    }

    copyCode();
});

function copyCode() {
    const copyBtn = document.getElementById('copy_btn');
    copyBtn.addEventListener('click', () => {
        const passwordCode = document.getElementById('password_code');

        navigator.clipboard.writeText(passwordCode.textContent)
            .then(() => {
                console.log('Password copy: ', passwordCode.textContent);
                alert('Password correctly copied: ' + passwordCode.textContent);
            })
            .catch(error => {
                console.log('Unable to copy password ', error);
            }); 
    });
};

