import { FETCH_USERS_PENDING, FETCH_USERS_REJECTED, FETCH_USERS_SUCCESS } from '../actionTypes/employees';

export interface IUsers {
  id: number;
  firstName: string;
  lastName: string;
  dob: Date;
}

export const getUsersSuccess = (users: IUsers) => {
  return { type: FETCH_USERS_SUCCESS, payload: { data: users } };
};

export const getUsersRejected = (error: string) => {
  return { type: FETCH_USERS_REJECTED, payload: { error: error } };
};

export const getUsersPending = () => {
  return { type: FETCH_USERS_PENDING };
};

export type EmployeesActions = ReturnType<
  typeof getUsersSuccess | typeof getUsersRejected | typeof getUsersPending
>;
