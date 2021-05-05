import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const BodyDataSchema = new mongoose.Schema({
  altezza: String,
  peso: String,
  dob: String,
  bmi: Number,
  user: String,
});
