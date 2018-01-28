import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, filtersAlt } from '../fixtures/filters';

let setTextFilter;
let sortByDate;
let sortByAmount;
let setStartDate;
let setEndDate;
let wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
  />);
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: filtersAlt
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle setTextFilter', () => {
  const value = filtersAlt.text;
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(filtersAlt.text);
});

test('should handle sortByDate', () => {
  const value = filters.sortBy;
  wrapper.setProps({
    filters: filtersAlt
  });
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should handle sortByAmount', () => {
  const value = filtersAlt.sortBy;
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle setStartDate and setEndDate', () => {
  const dates = {
    startDate: filtersAlt.startDate,
    endDate: filtersAlt.endDate
  };
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(dates);
  expect(setStartDate).toHaveBeenLastCalledWith(filtersAlt.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(filtersAlt.endDate);
});

test('should handle onFocusChange', () => {
  const calendarFocused = 'endDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
