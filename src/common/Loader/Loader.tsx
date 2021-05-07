import { useSelector } from 'react-redux';

export const Loader = () => {
  const store = useSelector((state) => state);
  const { employees }: any = store;
  return employees.pending && <div>Loading...</div>;
};
