import {Range} from '../range';
import {Node} from './node';
import {NodeType} from '../../enums/node-type';
import {INumberSchema} from '../interfaces/schema-interfaces';

export class NodeNumber extends Node implements INumberSchema {
  value: number;
  values: number[];
  range: Range;


  constructor(label: string, value: number, schema?: Partial<INumberSchema>) {
    super(label, NodeType.NUMBER, schema);
    this.value = value;
    this.values = schema && schema.values || null;
    this.range = schema && schema.range ? new Range(schema.range) : null;
  }

  isValid(): boolean {
    return this.range ? this.value >= this.range.from && this.value <= this.range.to : true;
  }
}
