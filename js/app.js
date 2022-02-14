function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin()
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('keypad').addEventListener
    ('click', function (event) {
        const number = event.target.innerText;
        const clacInput = document.getElementById('typed-numbers');
        if (isNaN(number)) {
            if (number == 'C') {
                clacInput.value = '';
            }
        }
        else {
            const previousNumber = clacInput.value;
            const newNumber = previousNumber + number;
            clacInput.value = newNumber;
        }
    })

function verfyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const success = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        success.style.display = 'block';
        failError.style.display = 'none'
    }
    else {

        failError.style.display = 'block';
        success.style.display = 'none';
    }
}