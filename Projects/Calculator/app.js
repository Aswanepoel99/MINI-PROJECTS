const result = document.querySelector('h2');
const resultstr = document.querySelector('p');
const buttons = document.querySelectorAll("button");
let operation = '';
let val1 = '';
let val2 = '';
let opres = 0;
let firstVal = true;

resultstr.style.visibility = 'hidden';
result.style.visibility = 'hidden';

function postResult(nm1, op, nm2) {
    resultstr.innerText = `${nm1} ${op} ${nm2}  `
    result.innerText = opres;
    resultstr.style.visibility = 'visible';
    result.style.visibility = 'visible';
}

function calcRes(num1, num2, op) {
    switch (op) {
        case "+":
            opres = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            opres = parseInt(num1) - parseInt(num2);
            break;
        case "/":
            opres = parseInt(num1) / parseInt(num2);
            break;
        case "*":
            opres = parseInt(num1) * parseInt(num2);
            break;
        default:
            break;
    }
}

function clickHanler(el) {
    if (el.className.includes('num')) {
        if (firstVal) {
            console.log('number')
            val1 += el.innerText;
            postResult(val1, "", "")
        } else {
            console.log('number 2')
            val2 += el.innerText;
            postResult(val1, operation, val2)
        }
    } else if (el.className.includes('op')) {
        console.log('operation')
        operation = el.innerText
        firstVal = false;
        postResult(val1, operation, "")
    } else if (el.className.includes('equals')) {
        console.log('equals')
        calcRes(val1, val2, operation)
        postResult(val1, operation, val2)
        val1 = opres;
        val2 = '';
    } else if (el.className.includes('clear')) {
        console.log('clear')
         val1 = '';
         val2 = '';
         opres = 0;
         firstVal = true;
         resultstr.style.visibility = 'hidden';
         result.style.visibility = 'hidden';

    }
}

function buttonsetup(but) {
    but.forEach(Element => {
        Element.addEventListener('click', (E) => {
            clickHanler(Element)
        })

    });
}
buttonsetup(buttons)
console.log(buttons)
