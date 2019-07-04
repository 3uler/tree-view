import {Range} from '../range';

export interface IBaseSchema {
  readonly: boolean;
}

export interface IStringSchema extends IBaseSchema {
  minimalLength: number;
  maximalLength: number;
  values: string[];
}

export interface INumberSchema extends IBaseSchema {
  range: Range;
  values: number[];
}

export interface IArraySchema extends IBaseSchema {
  values: any[];
  minimalLength: number;
  maximalLength: number;
  range: Range;
}
