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
  let index = 0;

  const sortedArr = employees.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

  for (let i = 0; i < alphabet.length; i++) {
    newObj.letter = alphabet[i];
    while (index < sortedArr.length) {
      if (alphabet[i] !== sortedArr[index].lastName[0]) {
        break;
      } else if (alphabet[i] === sortedArr[index].lastName[0]) {
        isTheSame = true;
        newObj.array.push(sortedArr[index]);
        index++;
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
