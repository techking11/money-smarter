import { NextFunction, Request, Response } from 'express';
import { getAll } from '../models/income.model';

export const getAllIncomes = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const response = await getAll();
    console.log(response.length);
    if (response.length <= 0) {
      return;
    }
    res.status(200).json({ status: 'success', data: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const createNewIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};

export const getIncomeById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};

export const updateIncomeById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};

export const removeIncomeById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};

export const deleteIncomeById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};
