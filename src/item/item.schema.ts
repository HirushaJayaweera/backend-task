import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  category: String,
});

export interface Item extends mongoose.Document {
  name: string;
  quantity: number;
  category: string;
}

