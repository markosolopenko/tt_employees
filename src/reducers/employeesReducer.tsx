import { EmployeesActions, IUsers } from '../actionCreators/employees';
import { FETCH_USERS_PENDING, FETCH_USERS_REJECTED, FETCH_USERS_SUCCESS } from '../actionTypes/employees';

interface State {
  users: IUsers[];
  error: string;
  pending: boolean;
}

const initState: State = { users: [], error: '', pending: false };

export const employeesReducer = (state = initState, action: any) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        users: action.payload.data,
        error: null,
        pending: false,
      };
    case FETCH_USERS_REJECTED:
      return {
        error: action.payload.error,
        users: [],
        pending: false,
      };
    case FETCH_USERS_PENDING:
      return {
        error: null,
        users: [],
        pending: true,
      };
    default:
      return state;
  }
};
