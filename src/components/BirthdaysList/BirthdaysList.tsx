import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { IEmployees } from '../../actionCreators/employees';

import s from './BirthdaysList.module.scss';

interface IProps {
  employeesList: IEmployees[];
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const BirthdaysList: React.FC<IProps> = ({ employeesList }) => {
  const [selectedIdsList, setSelectedIds] = useState(
    JSON.parse(localStorage.getItem('selectedUsers') || '[]'),
  );
  const { employees }: any = useSelector((state) => state);
  const { selectedIds } = employees;

  useEffect(() => {
    setSelectedIds(JSON.parse(localStorage.getItem('selectedUsers') || '[]'));
  }, [selectedIds]);

  const selectedUsers = useMemo(() => {
    return employeesList.filter((employee) => selectedIdsList.includes(employee.id));
  }, [selectedIdsList]);

  return (
    <div className={s['birthdays-list']}>
      {selectedUsers.map((user) => {
        const date = new Date(user.dob);
        const day = days[date.getDay()];
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return (
          <div className={s['birthdays-list__item']} key={user.id}>
            <div className={s['birthdays-list__item__month']}>{month}</div>
            <div className={s['birthdays-list__item__info']}>
              &#9679;&nbsp;{user.lastName}&nbsp;{user.firstName} - {day} {month}, {year} year
            </div>
          </div>
        );
      })}
    </div>
  );
};
