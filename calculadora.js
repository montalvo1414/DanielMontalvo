function addToDisplay(value) {
    var display = document.getElementById('display');
    if (display.value === 'Error') {
        display.value = '';
    }
    
    if (value === '*') {
        display.value += 'x';
    } else if(value === '/') {
        display.value+='÷'
    } else if(value === '**'){
        display.value+= '^'
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        var expression = document.getElementById('display').value;
        expression = expression.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
        document.getElementById('display').value = eval(expression);
        
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function calculatePercentage() {
    var displayValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(displayValue)) {
        var percentage = displayValue / 100;
        document.getElementById('display').value = percentage;
    }
}
function deleteLast() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function calculateSquareRoot() {
    var displayValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(displayValue)) {
        var squareRoot = Math.sqrt(displayValue);
        document.getElementById('display').value = squareRoot;
    }
}