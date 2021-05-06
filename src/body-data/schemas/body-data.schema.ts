import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const BodyDataSchema = new mongoose.Schema({
  height: Number,
  weight: Number,
  date: String,
  bmi: Number,
  user: String,
});
