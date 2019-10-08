import { Schema } from 'mongoose';
import { modelOptions } from './optionsProp';

@modelOptions({ schemaOptions: { timestamps: true } })
/**
 * This class can be used for already existing type infomation for the Timestamps
 */
export abstract class TimeStamps {
  public createdAt!: Readonly<Date>;
  public updatedAt!: Readonly<Date>;
}

/**
 * This class provied the basic mongoose document properties
 */
export abstract class Base<T_ID extends any = Schema.Types.ObjectId> {
  public _id: T_ID;
  // tslint:disable-next-line:variable-name
  public __v: number;
  // tslint:disable-next-line:variable-name
  public __t: undefined | string | number;
}
