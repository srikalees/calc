function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function calculate() {
    let display = document.getElementById('display').innerText;
    let result = eval(display);
    document.getElementById('display').innerText = result;
}
