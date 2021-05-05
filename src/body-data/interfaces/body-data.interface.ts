import { Document } from 'mongoose';
export interface BodyData extends Document {
  readonly altezza: string;
  readonly peso: string;
  readonly dob: string;
  readonly bmi: number;
  readonly user: string;
}
