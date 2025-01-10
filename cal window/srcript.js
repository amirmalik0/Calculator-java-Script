const input = document.getElementById('display');

// function clickbtn(value) {
//     input.value += value;
// }

function clickbtn(value) {
    const display1 = input.value.slice(-1); // Get the last character
    if (
        (display1 === "+" || display1 === "-" || display1 === "*" || display1 === "/") &&
        (value === "+" || value === "-" || value === "*" || value === "/")
    ) {
        input.value = input.value.slice(0, -1) + value;
    } else { 
        input.value += value;
    }
}
function clearDisplay() {
    input.value = '';
}

function deleteLast() {
    input.value = input.value.slice(0, -1);
}

function result() {
 {
        input.value = eval(input.value);
    } 
}
