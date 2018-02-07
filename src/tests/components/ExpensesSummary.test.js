import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';
// import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary
    expenseCount={1}
    expensesTotal={200}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with 2 expenses', () => {
  const wrapper = shallow(<ExpensesSummary
    expenseCount={2}
    expensesTotal={300}
  />);
  expect(wrapper).toMatchSnapshot();
});
