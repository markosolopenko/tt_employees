import React, { useState } from 'react';
import { IEmployees } from '../../actionCreators/employees';
import { INewObject } from '../../helpers/sortEmployeesByLastName';
import s from './ListOfEmployees.module.scss';

interface IProps {
  sortedEmployees: INewObject[];
}
const initialState: number[] = JSON.parse(localStorage.getItem('selectedUsers') || '[]');

export const ListOfEmployees: React.FC<IProps> = ({ sortedEmployees }: IProps) => {
  const [idsArray, setCurrValues] = useState(initialState);

  const handleActiveChange = (id: number) => {
    setCurrValues([...idsArray, id]);
    localStorage.setItem('selectedUsers', JSON.stringify([...idsArray, id]));
  };
  const handleNotActiveChange = (id: number) => {
    const updatedArray = idsArray.filter((item) => item !== id);
    setCurrValues(updatedArray);
    localStorage.setItem('selectedUsers', JSON.stringify(updatedArray));
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
                      idsArray.includes(employee.id) && s['employees-list__item__name--active']
                    }`}
                  >
                    {employee.lastName}&nbsp;{employee.firstName}
                  </div>
                  <div className={s['employees-list__item__dob']}>{employee.dob}</div>
                  <div
                    className={s['employees-list__item__input']}
                    onClick={() => handleNotActiveChange(employee.id)}
                  >
                    <label className={s['employees-list__item__input__notactive']}>not active</label>
                    <input
                      type="radio"
                      value="notactive"
                      checked={!idsArray.includes(employee.id)}
                      readOnly
                    />
                  </div>
                  <div
                    className={s['employees-list__item__input']}
                    onClick={() => handleActiveChange(employee.id)}
                  >
                    <label className={s['employees-list__item__input__active']}>active</label>
                    <input type="radio" value="active" checked={idsArray.includes(employee.id)} readOnly />
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
