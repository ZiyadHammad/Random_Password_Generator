// DOM Elements 
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaeseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

// Retrieving values from User
generateEl.addEventListener('click', () => {
    const length = Number(lengthEl.value)
    const hasLower = lowercaeseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumbers = numbersEl.checked
    const hasSymbols = symbolsEl.checked
   resultEl.innerText = generatedPassword(hasLower, hasUpper, hasNumbers, hasSymbols, length)
})

// Copy password to clipboard

clipboardEl.addEventListener('click', () => {
    const textArea = document.createElement('textarea')
    const password = resultEl.innerText
    if(!password) return

    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    alert('Password copied successfully')
})

function generatedPassword(lower, upper, symbol, number, length) {
    // init password var
    let password = ''
    // filter out unchecked types
    const checkedCount = lower + upper + number + symbol
    console.log(checkedCount)
    const checkedArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0])
    console.log(checkedArr)
    
    // if no boxes were checked return empty string
    if(checkedCount === 0) return password

    // loop over length
    for(let i = 0; i < length; i ++) {
        checkedArr.forEach(check => {
            const funcName = Object.keys(check)[0]
            password += randomFunc[funcName]()
           
        })
    }
    const finalPassword = password.slice(0, length)

    return finalPassword.shuffle()

   
}
// Generator Functions

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 9) + 48);
}

function getRandomSymbol() {
    let symbols = "!@#$%^&*()-_+=[]{};:'/.,"
    return symbols.charAt(Math.floor(Math.random() * symbols.length))
}


String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});