let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');
let expression = "";
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.innerText;
        if (value === "C") {
            expression = "";
            input.value = "";
        }
        else if (value === "=") {
            try {
                expression = expression.replace("X", "*");
                input.value = eval(expression);
                expression = input.value;
            } catch {
                input.value = "Error";
                expression = "";
            }
        }
        else {
            expression += value;
            input.value = expression;
        }
    });
});
