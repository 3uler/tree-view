import {Node} from './node';
import {NodeType} from '../../enums/node-type';
import {IStringSchema} from '../interfaces/schema-interfaces';

export class NodeString extends Node implements IStringSchema {
  value: string;
  values: string[];
  minimalLength: number;
  maximalLength: number;


  constructor(label: string, value: string, schema?: IStringSchema) {
    super(label, NodeType.STRING, schema && schema.readonly || false);
    this.value = value;
    this.values = schema && schema.values || null;
    this.minimalLength = schema && schema.minimalLength || null;
    this.maximalLength = schema && schema.maximalLength || null;
  }
}
