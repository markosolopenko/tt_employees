import { FETCH_USERS_PENDING, FETCH_USERS_REJECTED, FETCH_USERS_SUCCESS } from '../actionTypes/employees';

export interface IEmployees {
  id: number;
  firstName: string;
  lastName: string;
  dob: Date;
}
export type EmployeesActions =
  | { type: 'FETCH_USERS_SUCCESS'; payload: { data: IEmployees[] } }
  | { type: 'FETCH_USERS_REJECTED'; payload: { error: string } }
  | { type: 'FETCH_USERS_PENDING' };

export const getUsersSuccess = (users: IEmployees[]): EmployeesActions => {
  return { type: FETCH_USERS_SUCCESS, payload: { data: users } };
};

export const getUsersRejected = (error: string): EmployeesActions => {
  return { type: FETCH_USERS_REJECTED, payload: { error: error } };
};

export const getUsersPending = (): EmployeesActions => {
  return { type: FETCH_USERS_PENDING };
};
