import { NextFunction, Request, Response } from 'express';
import * as IncomeModel from '../models/income.model';
import AppError from '../utils/appError.util';

export const getAllIncomes = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const response = await IncomeModel.getAllIncome();

    if (response.length <= 0) {
      res.status(404).json({ status: 'fail', message: 'Document not found' });
    }
    new AppError(200, 'right');
    res.status(200).json({ status: 'success', data: 'yes' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createNewIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, cost } = req.body;
    const response = await IncomeModel.createOneIncome(name, cost);
    if (!response) {
      return;
    }
    res.status(201).json({ status: 'success', data: response });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getIncomeById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const getIncome = await IncomeModel.getOneIncome(req.params.id);
    if (!getIncome) {
      return;
    }
    res.status(200).json({ status: 'success', data: getIncome });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateIncomeById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updateIncome = await IncomeModel.updateOneIncome(
      req.params.id,
      req.body
    );
    if (!updateIncome) {
      return;
    }
    res.status(202).json({ status: 'success', data: updateIncome });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const removeIncomeById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await IncomeModel.removeOneIncome(req.params.id);
    res.status(204).json({ status: 'success' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteIncomeById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await IncomeModel.deleteOneIncome(req.params.id);
    res.status(204).json({ status: 'success' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
