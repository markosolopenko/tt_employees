import { IEmployees } from '../actionCreators/employees';
import { alphabetUpper } from '../constants/lists';

const alphabet = alphabetUpper;

export interface INewObject {
  letter: string;
  array: IEmployees[] | any;
  isEmpty: boolean;
}
export const sortEmployeesByLastName: Function = (employees: IEmployees[]) => {
  const newArr = [];
  let newObj: INewObject = { letter: '', array: [], isEmpty: false };
  let isTheSame = false;
  for (let i = 0; i < alphabet.length; i++) {
    for (let index = 0; index < employees.length; index++) {
      if (alphabet[i] === employees[index].lastName[0]) {
        isTheSame = true;
        newObj.letter = alphabet[i];
        newObj.array.push(employees[index]);
      }
    }
    if (!isTheSame) {
      newObj.letter = alphabet[i];
      newObj.array = ['_ _ _ _'];
      newObj.isEmpty = true;
    }
    isTheSame = false;
    newArr.push(newObj);
    newObj = { letter: '', array: [], isEmpty: false };
  }
  return newArr;
};
