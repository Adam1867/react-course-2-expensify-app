// // Get Expenses Total

const getExpensesTotal = (expenses) => {
  return expenses
    .map(expense => expense.amount)
    .reduce((total, currentValue) => total + currentValue, 0);
};

export default getExpensesTotal;
