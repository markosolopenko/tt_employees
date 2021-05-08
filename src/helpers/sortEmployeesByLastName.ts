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

  const sortedArr = employees.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

  for (let i = 0; i < alphabet.length; i++) {
    newObj.letter = alphabet[i];
    for (let index = 0; index < sortedArr.length; index++) {
      if (alphabet[i] === sortedArr[index].lastName[0]) {
        isTheSame = true;
        newObj.array.push(sortedArr[index]);
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
