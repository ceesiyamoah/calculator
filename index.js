const display = document.querySelector('.row.display')
const cells = document.querySelectorAll('.row.numbers>div.cell.number, .cell.zero')
const operators = document.querySelectorAll('div.cell.operator:not(.equal)')
const clear = document.querySelector('.cell.clear')
const backspace = document.querySelector('.cell.backspace')
const equal = document.querySelector('.cell.operator.equal')


//*function to clear the display
const emptyDisplay = () =>
{
    display.innerHTML = ''
}


//*Function to display 0 
const displayZero = () =>
{
    display.innerHTML = '0'
}

//*Function to check if the display is zero
const isZero = (content) =>
{
    return content.innerHTML === '0'
}


//* separating input into left and right operands
const getOperands = (expression, operatorIndex) =>
{
    let OperandLeft, OperandRight
    OperandLeft = parseInt(expression.slice(0, operatorIndex))
    OperandRight = parseInt(expression.slice(operatorIndex + 1, expression.length))
    return [OperandLeft, OperandRight]
}


//* Calculating the value based on the numbers and operators selected
const calculate = (content) =>
{
    if (content.includes('÷')) {
        let [OperandLeft, OperandRight] = getOperands(content, content.indexOf('÷'))
        return OperandLeft / OperandRight
    }
    if (content.includes('+')) {
        let [OperandLeft, OperandRight] = getOperands(content, content.indexOf('+'))
        return OperandLeft + OperandRight
    }
    if (content.includes('-')) {
        let [OperandLeft, OperandRight] = getOperands(content, content.indexOf('-'))
        return OperandLeft - OperandRight
    }
    if (content.includes('x')) {
        let [OperandLeft, OperandRight] = getOperands(content, content.indexOf('x'))
        return OperandLeft * OperandRight
    }


}

//*Backspace implementation
backspace.addEventListener('click', () =>
{
    display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1)
    if (display.innerHTML.length === 0) {
        displayZero()
    }
})

//TODO: finish up
equal.addEventListener('click', () =>
{
    if (!isZero(display.innerHTML)) {
        result = calculate(display.innerHTML)
        display.innerHTML = result
    }
})


//*making numbers interactive
cells.forEach(cell =>
{
    cell.addEventListener('click', () =>
    {
        if (display.innerHTML === '0') {
            emptyDisplay()
        }
        display.innerHTML += cell.innerHTML
    }
    )
});


//*making clear button interactive
clear.addEventListener('click', () =>
{
    emptyDisplay()
    displayZero()
})


//*making operators (equal not included) interactive
operators.forEach(operator =>
{
    operator.addEventListener('click', () =>
    {

        if (!isZero(display)) {

            if (
                !(display.innerHTML.includes('÷') ||
                    display.innerHTML.includes('+') ||
                    display.innerHTML.includes('-') ||
                    display.innerHTML.includes('x'))
            ) {
                display.innerHTML += operator.innerHTML
            }
        }

    }
    )
});



