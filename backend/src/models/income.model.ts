import Income from '../schemas/income.schema';

export const getAllIncome = () => {
  const getIncomeAll = Income.find();
  return getIncomeAll;
};

export const getOneIncome = (id: string) => {
  const getIncome = Income.findById(id);
  return getIncome;
};

export const createOneIncome = (name: string, cost: number) => {
  const newIncome = new Income({ name, cost });
  return newIncome.save();
};

export const updateOneIncome = (id: string, args: Object) => {
  const updateIncome = Income.findByIdAndUpdate(id, args, { new: true });
  return updateIncome;
};

export const removeOneIncome = (id: string) => {
  const removeIncome = Income.findByIdAndUpdate(id, { isDeleted: true });
  return removeIncome;
};

export const deleteOneIncome = (id: string) => {
  const deleteIncome = Income.findByIdAndDelete(id);
  return deleteIncome;
};
