import { EmployeesActions, IEmployees } from '../actionCreators/employees';
import { FETCH_USERS_PENDING, FETCH_USERS_REJECTED, FETCH_USERS_SUCCESS } from '../actionTypes/employees';

interface IState {
  employeesList: IEmployees[];
  error: string;
  pending: boolean;
}

const initState: IState = { employeesList: [], error: '', pending: false };

export const employeesReducer = (state = initState, action: EmployeesActions) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        employeesList: action.payload.data,
        error: null,
        pending: false,
      };
    case FETCH_USERS_REJECTED:
      return {
        error: action.payload.error,
        employeesList: [],
        pending: false,
      };
    case FETCH_USERS_PENDING:
      return {
        error: null,
        employeesList: [],
        pending: true,
      };
    default:
      return state;
  }
};
