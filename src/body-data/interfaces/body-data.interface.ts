import { Document } from 'mongoose';
export interface BodyData extends Document {
  readonly height: number;
  readonly weight: number;
  readonly bmi: number;
  readonly user: string;
}
