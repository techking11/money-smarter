import express from 'express';
import * as incomeController from '../controllers/income.controller';

const router = express.Router();

router
  .route('/')
  .get(incomeController.getAllIncomes)
  .post(incomeController.createNewIncome);

router
  .route('/:id')
  .get(incomeController.getIncomeById)
  .post(incomeController.removeIncomeById)
  .patch(incomeController.updateIncomeById)
  .delete(incomeController.deleteIncomeById);

export default router;
