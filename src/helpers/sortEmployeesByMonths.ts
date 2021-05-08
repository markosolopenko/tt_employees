import { IEmployees } from '../actionCreators/employees';
import { days, months, monthsSorted } from '../constants/lists';

export interface INewObj {
  month: string;
  array: IEmployees[];
  days: string[];
  years: number[];
}
const monthsFromNow = months;
const monthsSortedByCalendar = monthsSorted;
const daysOfWeek = days;

export const sortEmployeesByMonths: Function = (selectedEmployees: IEmployees[]) => {
  let newObj: INewObj = { month: '', array: [], days: [], years: [] };
  const sortedArr = [];
  for (let i = 0; i < monthsFromNow.length; i++) {
    newObj.month = monthsFromNow[i];
    for (let index = 0; index < selectedEmployees.length; index++) {
      const date = new Date(selectedEmployees[index].dob);
      const day = daysOfWeek[date.getDay()];
      const month = monthsSortedByCalendar[date.getMonth()];
      const year = date.getFullYear();

      if (month === monthsFromNow[i]) {
        newObj.array.push(selectedEmployees[index]);
        newObj.days.push(day);
        newObj.years.push(year);
      }
    }

    const sortedInnerArray = newObj.array.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
    newObj.array = sortedInnerArray;
    sortedArr.push(newObj);
    newObj = { month: '', array: [], days: [], years: [] };
  }
  return sortedArr;
};
