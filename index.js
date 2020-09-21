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


//*making operators (= not included) interactive
operators.forEach(operator =>
{
    operator.addEventListener('click', () =>
    {
        //TODO implement algorithm
        displayZero()
    }
    )
});



