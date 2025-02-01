import { Document } from 'mongoose';

export interface IIncome extends Document {
  name: string;
  cost: number;
  isDeleted?: boolean;
}
