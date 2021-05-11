import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee, IEmployees, selectNewEmployee } from '../../actionCreators/employees';
import { INewObject } from '../../helpers/sortEmployeesByLastName';
import s from './ListOfEmployees.module.scss';

interface IProps {
  sortedEmployees: INewObject[];
}

export const ListOfEmployees: React.FC<IProps> = ({ sortedEmployees }: IProps) => {
  const dispatch = useDispatch();
  const { employees }: any = useSelector((state) => state);
  const { selectedEmployees } = employees;

  const handleActiveChange = (employee: IEmployees) => {
    dispatch(selectNewEmployee(employee));
  };
  const handleNotActiveChange = (id: number) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <div className={s['employees-list']}>
      {sortedEmployees.map((obj, index) => (
        <div key={index} className={s['employees-list__box']}>
          <div className={s['employees-list__letter']}>{obj.letter}</div>
          <div className={s['employees-list__box__card']}>
            {obj.array.map((employee: IEmployees) =>
              !obj.isEmpty ? (
                <div className={s['employees-list__item']} key={employee.id}>
                  <div
                    className={`${s['employees-list__item__name']} ${
                      selectedEmployees.some((user: IEmployees) => user.id === employee.id) &&
                      s['employees-list__item__name--active']
                    }`}
                  >
                    {employee.lastName}&nbsp;{employee.firstName}
                  </div>
                  <div
                    className={s['employees-list__item__input']}
                    onClick={() => handleNotActiveChange(employee.id)}
                  >
                    <label className={s['employees-list__item__input__notactive']}>not active</label>
                    <input
                      type="radio"
                      value="notactive"
                      checked={!selectedEmployees.some((user: IEmployees) => user.id === employee.id)}
                      readOnly
                    />
                  </div>
                  <div
                    className={s['employees-list__item__input']}
                    onClick={() => handleActiveChange(employee)}
                  >
                    <label className={s['employees-list__item__input__active']}>active</label>
                    <input
                      type="radio"
                      value="active"
                      checked={selectedEmployees.some((user: IEmployees) => user.id === employee.id)}
                      readOnly
                    />
                  </div>
                </div>
              ) : (
                <div className={s['employees-list__item']} key={obj.letter}>
                  {employee}
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
