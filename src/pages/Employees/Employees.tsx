import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersThunk } from '../../thunks/usersThunks';

export const Employees = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, []);
  return <div>Employees Page</div>;
};
