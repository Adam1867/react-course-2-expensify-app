import getTotalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = getTotalExpenses([]);
  expect(result).toEqual(0);
});

test('should correctly add up a single expense', () => {
  const result = getTotalExpenses([expenses[0]]);
  expect(result).toEqual(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
  const result = getTotalExpenses(expenses);
  const expected = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  expect(result).toEqual(expected);
});
