import { Dispatch } from 'react';
import {
  EmployeesActions,
  getUsersPending,
  getUsersRejected,
  getUsersSuccess,
} from '../actionCreators/employees';
import { fetchUsers } from '../api/usersRequests';

export const fetchEmployeesThunk = () => async (dispatch: Dispatch<EmployeesActions>) => {
  dispatch(getUsersPending());
  try {
    const response = await fetchUsers();
    dispatch(getUsersSuccess(response.data));
  } catch (e) {
    dispatch(getUsersRejected(e.message));
  }
};
