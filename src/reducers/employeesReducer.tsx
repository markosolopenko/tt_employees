import { EmployeesActionTypes } from '../actionCreators/employees';

const initState = { employees: [] };

export const employeesReducer = (state = initState, action: EmployeesActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};
