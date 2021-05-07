import React, { useState } from 'react';
import { IEmployees } from '../../actionCreators/employees';
import s from './ListOfEmployees.module.scss';

interface IProps {
  employees: IEmployees[];
}
interface IState {
  ids: number[];
}

const initState: IState = { ids: [] };
export const ListOfEmployees: React.FC<IProps> = ({ employees }: IProps) => {
  const [values, setCurrValues] = useState(initState);

  const handleActiveChange = (id: number) => {
    setCurrValues({ ids: [...values.ids, id] });
  };
  const handleNotActiveChange = (id: number) => {
    setCurrValues({ ids: values.ids.filter((item) => item !== id) });
  };

  const { ids } = values;

  return (
    <div className={s['employees-list']}>
      {employees.map((employee) => {
        return (
          <div className={s['employees-list__item']} key={employee.id}>
            <span className={s['employees-list__item__first-name']}>{employee.firstName}</span>
            <span className={s['employees-list__item__last-name']}>{employee.lastName}</span>
            <div className={s['employees-list__item__dob']}>{employee.dob}</div>

            <label className={s['employees-list__item__input--notactive']}>not active</label>
            <input
              type="radio"
              value="notactive"
              onChange={() => handleNotActiveChange(employee.id)}
              checked={!ids.includes(employee.id)}
            />

            <label className={s['employees-list__item__input--active']}>active</label>
            <input
              type="radio"
              value="active"
              checked={ids.includes(employee.id)}
              onChange={() => handleActiveChange(employee.id)}
            />
          </div>
        );
      })}
    </div>
  );
};
