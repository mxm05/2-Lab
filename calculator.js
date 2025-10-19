window.onload = function(){ 

let a = ''
let b = ''
let expressionResult = ''
let selectedOperation = null

// окно вывода результата
outputElement = document.getElementById("result")

// список объектов кнопок циферблата (id которых начинается с btn_digit_)
digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

function onDigitButtonClicked(digit) {
    if (!selectedOperation) {
        if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
            a += digit
        }
        outputElement.innerHTML = a
    } else {
        if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
            b += digit
            outputElement.innerHTML = b        
        }
    }
}

// устанавка колбек-функций на кнопки циферблата по событию нажатия
digitButtons.forEach(button => {
    button.onclick = function() {
        const digitValue = button.innerHTML
        onDigitButtonClicked(digitValue)
    }
});


// установка колбек-функций для кнопок операций
document.getElementById("btn_op_mult").onclick = function() { 
    if (a === '') return
    selectedOperation = 'x'
    get_value()
}
document.getElementById("btn_op_plus").onclick = function() { 
    if (a === '') return
    selectedOperation = '+'
    get_value()

}
document.getElementById("btn_op_minus").onclick = function() { 
    if (a === '') return
    selectedOperation = '-'
    get_value()
}
document.getElementById("btn_op_div").onclick = function() { 
    if (a === '') return
    selectedOperation = '/'
    get_value()
}


// кнопка удаления
document.getElementById("btn_op_sign").onclick = function() { 
    a = a.slice(0, -1);
    outputElement.innerHTML = a
}

// кнопка очищения
document.getElementById("btn_op_clear").onclick = function() { 
    a = ''
    b = ''
    selectedOperation = 0
    expressionResult = ''
    outputElement.innerHTML = 0
}

document.getElementById("btn_op_sqrt").onclick = function() { 
    a = Math.sqrt((a))
    outputElement.innerHTML = a
}

document.getElementById("btn_op_two").onclick = function() { 
    a = a * a
    outputElement.innerHTML = a
}
document.getElementById("btn_op_three").onclick = function() { 
    a = a * a * a
    outputElement.innerHTML = a
}
document.getElementById("btn_op_fact").onclick = function() { 
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
    a = factorial (a)
    outputElement.innerHTML = a
}

function get_value (){
    if (a === '' || b === '' || !selectedOperation)
        return
        
    switch(selectedOperation) { 
        case 'x':
            expressionResult = (+a) * (+b)
            break;
        case '+':
            expressionResult = (+a) + (+b)
            break;
        case '-':
            expressionResult = (+a) - (+b)
            break;
        case '/':
            expressionResult = (+a) / (+b)
            break;
    }
    
    a = expressionResult.toString()
    b = ''
    // selectedOperation = null

    outputElement.innerHTML = a
}



// кнопка расчёта результата
document.getElementById("btn_op_equal").onclick = function() { 
    get_value()
    
}
};