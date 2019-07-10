import {Range} from '../range';
import {Node} from './node';
import {NodeType} from '../../enums/node-type';
import {INumberSchema} from '../interfaces/schema-interfaces';

export class NodeNumber extends Node implements INumberSchema {


  constructor(label: string, value: number, schema?: Partial<INumberSchema>) {
    NodeNumber.validateSchema(schema);
    super(label, NodeType.NUMBER, schema);
    this.value = value;
    this.values = schema && schema.values || null;
    this.range = schema && schema.range ? new Range(schema.range) : null;
  }

  value: number;
  values: number[];
  range: Range;

  private static validateSchema(schema: Partial<INumberSchema>): void {
    if (!schema || (schema && !Object.keys(schema).includes('values'))) {
      return;
    }
    if (!schema.values.every((value => typeof value === 'number'))) {
      throw new Error('Values must be of type number');
    }
  }

  isValid(): boolean {
    return this.range ? this.value >= this.range.from && this.value <= this.range.to : true;
  }
}
