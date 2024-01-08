// First Real World App Dev

// Just a basic expense and income tracker. Will need to update to add specific categories for income and expenses to smooth experience


let exepenseList = document.getElementById('expenseList');


// Allows us to add an expense
function addExpense() {

    // Grab whatever the user enters in the expense amount field and store it here
    let expenseAmount = document.getElementById('expenseAmount').value;

    
    if (expenseAmount !== '' && !isNaN(expenseAmount)) {

        let listItem = document.createElement('li');


        listItem.textContent = `$${expenseAmount} (Expense)`;

        exepenseList.appendChild(listItem);
    } else {
        alert('Enter a valid number');
    }
}

function addIncome() {

    let incomeAmount = document.getElementById('incomeAmount').value;


    if (incomeAmount !== '' && !isNaN(incomeAmount)) {
        
        let listIncome = document.createElement('li');

        listIncome.textContent = `$${incomeAmount} (Income)`;

        incomeList.appendChild(listIncome);
    } else {
        alert('Enter a valid income amount (using numbers)');
    }
}