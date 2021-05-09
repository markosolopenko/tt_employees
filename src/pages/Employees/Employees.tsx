import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListOfEmployees } from '../../components/ListOfEmployees/ListOfEmployees';
import { fetchEmployeesThunk } from '../../thunks/employeesThunks';
import s from './Employees.module.scss';
import { Loader } from '../../common/Loader/Loader';
import { sortEmployeesByLastName } from '../../helpers/sortEmployeesByLastName';
import { BirthdaysList } from '../../components/BirthdaysList/BirthdaysList';

export const Employees: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeesThunk());
  }, []);

  const store = useSelector((state) => state);
  const { employees }: any = store;
  const { employeesList } = employees;

  const sortedArrByLastName = useMemo(() => {
    return sortEmployeesByLastName(employeesList);
  }, [employeesList]);
  return (
    <div className={s['employees-page']}>
      {sortedArrByLastName.length !== 0 ? (
        <>
          <div className={s['employees-page__list']}>
            <div className={s['employees-page__list__title']}>Employees</div>
            <ListOfEmployees sortedEmployees={sortedArrByLastName} />
          </div>
          <div className={s['employees-page__birthday']}>
            <div className={s['employees-page__birthday__title']}>Employees birthday</div>
            <BirthdaysList employeesList={employeesList} />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
