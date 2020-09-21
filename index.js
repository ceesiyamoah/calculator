const display = document.querySelector('.row.display')
const cells = document.querySelectorAll('.row.numbers>div.cell.number, .cell.zero')
const operators = document.querySelectorAll('div.cell.operator:not(.equal)')
const clear = document.querySelector('.cell.clear')
console.log(clear)


//function to clear the display
const emptyDisplay = () =>
{
    display.innerHTML = ''
}


//Function to display 0 
const displayZero = () =>
{
    display.innerHTML = '0'
}




//making numbers interactive
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


//making clear button interactive
clear.addEventListener('click', () =>
{
    emptyDisplay()
    displayZero()
})


//making operators (= not included) interactive
operators.forEach(operator =>
{
    operator.addEventListener('click', () =>
    {
        operandLeft = parseInt(display.innerHTML)
        console.log(operandLeft)
        displayZero()
    }
    )
});



