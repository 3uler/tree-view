import {Range} from '../range';
import {Node} from './node';
import {NodeType} from '../../enums/node-type';
import {INumberSchema} from '../interfaces/schema-interfaces';

export class NodeNumber extends Node implements INumberSchema {
  value: number;
  values: number[];
  range: Range;


  constructor(label: string, value: number, schema?: INumberSchema) {
    super(label, NodeType.NUMBER, schema && schema.readonly || false);
    this.value = value;
    this.values = schema && schema.values || null;
    this.range = schema && schema.range ? new Range(schema.range) : null;
  }
}
