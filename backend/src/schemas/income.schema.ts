import { model, Schema } from 'mongoose';
import { IIncome } from '../@types/income.type';
import { Query } from 'mongoose';

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
    isDeleted: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

incomeSchema.pre(/^find/, function (this: Query<any, any>, next): void {
  this.where({ isDeleted: false }).sort({ _id: -1 });
  next();
});

const Income = model<IIncome>('Income', incomeSchema);
export default Income;
