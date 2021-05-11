import { EmployeesActions, IEmployees } from '../actionCreators/employees';
import {
  DELETE_EMPLOYEE,
  FETCH_USERS_PENDING,
  FETCH_USERS_REJECTED,
  FETCH_USERS_SUCCESS,
  SELECT_NEW_EMPLOYEE,
} from '../actionTypes/employees';

interface IState {
  employeesList: IEmployees[];
  error: string;
  pending: boolean;
  selectedEmployees: IEmployees[];
}

const initState: IState = {
  employeesList: [],
  error: '',
  pending: false,
  selectedEmployees: JSON.parse(localStorage.getItem('selectedUsers') || '[]'),
};

export const employeesReducer = (state = initState, action: EmployeesActions) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        employeesList: action.payload.data,
        error: null,
        pending: false,
      };
    case FETCH_USERS_REJECTED:
      return {
        ...state,
        error: action.payload.error,
        employeesList: [],
        pending: false,
      };
    case FETCH_USERS_PENDING:
      return {
        ...state,
        error: null,
        employeesList: [],
        pending: true,
      };
    case SELECT_NEW_EMPLOYEE:
      const { employee } = action.payload;
      localStorage.setItem('selectedUsers', JSON.stringify([...state.selectedEmployees, employee]));
      return {
        ...state,
        selectedEmployees: [...state.selectedEmployees, employee],
      };
    case DELETE_EMPLOYEE:
      const { id } = action.payload;
      localStorage.setItem(
        'selectedUsers',
        JSON.stringify(state.selectedEmployees.filter((user) => user.id !== id)),
      );
      return {
        ...state,
        selectedEmployees: state.selectedEmployees.filter((employee) => employee.id !== id),
      };
    default:
      return state;
  }
};
