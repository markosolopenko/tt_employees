import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { IEmployees } from '../../actionCreators/employees';
import { INewObj, sortEmployeesByMonths } from '../../helpers/sortEmployeesByMonths';

import s from './BirthdaysList.module.scss';

interface IProps {
  employeesList: IEmployees[];
}

export const BirthdaysList: React.FC<IProps> = ({ employeesList }) => {
  const [selectedIdsList, setSelectedIds] = useState(
    JSON.parse(localStorage.getItem('selectedUsers') || '[]'),
  );
  const { employees }: any = useSelector((state) => state);
  const { selectedIds } = employees;

  useEffect(() => {
    setSelectedIds(JSON.parse(localStorage.getItem('selectedUsers') || '[]'));
  }, [selectedIds]);

  const selectedEmployees = useMemo(() => {
    return employeesList.filter((employee) => selectedIdsList.includes(employee.id));
  }, [selectedIdsList]);

  const sortedArrayByDate = useMemo(() => {
    return sortEmployeesByMonths(selectedEmployees);
  }, [selectedEmployees]);
  let alEmpty = true;
  return (
    <div className={s['birthdays-list']}>
      {sortedArrayByDate.map((obj: INewObj, index: number) => {
        return (
          obj.array.length !== 0 && (
            <div key={index}>
              <div className={s['birthdays-list__month']}>{obj.month}</div>
              {obj.array.map((user: IEmployees, index: number) => {
                alEmpty = false;
                return (
                  <div className={s['birthdays-list__item']} key={user.id}>
                    <div className={s['birthdays-list__item__info']}>
                      &#9679;&nbsp;{user.lastName}&nbsp;{user.firstName} - {obj.days[index]} {obj.month}
                      ,&nbsp;
                      {obj.years[index]} year
                    </div>
                  </div>
                );
              })}
            </div>
          )
        );
      })}
      {alEmpty && <div className={s['birthdays-list__message']}>Employees List is empty</div>}
    </div>
  );
};
