import { FETCH_USERS } from '../actionTypes/employees';

interface IUsers {
  id: number;
  firstName: string;
  lastName: string;
  dob: Date;
}

export const fetchUsers = (users: IUsers) => {
  return { type: FETCH_USERS, data: users };
};

export type EmployeesActionTypes = ReturnType<typeof fetchUsers>;
