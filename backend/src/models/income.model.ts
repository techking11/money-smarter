import Income from '../schemas/income.schema';

export const getAll = () => {
  const allData = Income.find();
  return allData;
};
