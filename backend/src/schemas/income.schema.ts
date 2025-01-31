import { model, Schema } from 'mongoose';
import { IIncome } from '../@types/income.type';

const incomeSchema: Schema = new Schema<IIncome>(
  {
    name: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Income = model<IIncome>('Income', incomeSchema);
export default Income;
