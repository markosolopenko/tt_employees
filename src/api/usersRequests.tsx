import { axiosInstance } from './api';

export const fetchUsers = () => {
  return axiosInstance.get('/task0/users');
};
