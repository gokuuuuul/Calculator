let display = document.getElementById('display');
let current = '';
function press(val) {
    if (current.length > 20) return; // Prevent overflow
    if (val === '.' && current.split(/[-+*/]/).pop().includes('.')) return;
    current += val;
    display.value = current;
}
function clearDisplay() {
    current = '';
    display.value = '';
}
function calculate() {
    try {
        let result = eval(current.replace(/[^-+*/.\d]/g, ''));
        if (result === undefined || isNaN(result)) {
            display.value = 'Error';
            current = '';
        } else {
            display.value = result;
            current = result.toString();
        }
    } catch {
        display.value = 'Error';
        current = '';
    }
}
