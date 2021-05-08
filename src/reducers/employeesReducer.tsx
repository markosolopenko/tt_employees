import { EmployeesActions, IEmployees } from '../actionCreators/employees';
import {
  DELETE_EMPLOYEE_ID,
  FETCH_USERS_PENDING,
  FETCH_USERS_REJECTED,
  FETCH_USERS_SUCCESS,
  SELECT_NEW_EMPLOYEE,
} from '../actionTypes/employees';

interface IState {
  employeesList: IEmployees[];
  error: string;
  pending: boolean;
  selectedIds: number[];
}

const initState: IState = {
  employeesList: [],
  error: '',
  pending: false,
  selectedIds: JSON.parse(localStorage.getItem('selectedUsers') || '[]'),
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
      return {
        ...state,
        selectedIds: [...state.selectedIds, action.payload.id],
      };
    case DELETE_EMPLOYEE_ID:
      return {
        ...state,
        selectedIds: state.selectedIds.filter((id) => id !== action.payload.id),
      };
    default:
      return state;
  }
};
