import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListOfEmployees } from '../../components/ListOfEmployees/ListOfEmployees';
import { fetchEmployeesThunk } from '../../thunks/employeesThunks';
import s from './Employees.module.scss';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const Employees = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { employees }: any = store;
  const { employeesList } = employees;

  useEffect(() => {
    dispatch(fetchEmployeesThunk());
  }, []);

  console.log(store);
  return (
    <div className={s['employees-page']}>
      <div className={s['employees-page__list']}>
        <div className={s['employees-page__list__title']}>Employees</div>
        <ListOfEmployees employees={employeesList} />
      </div>
      <div className={s['employees-page__birthday']}>
        <div className={s['employees-page__birthday__title']}>Employees birthday</div>
      </div>
    </div>
  );
};
