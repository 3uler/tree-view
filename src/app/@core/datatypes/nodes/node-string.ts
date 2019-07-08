import {Node} from './node';
import {NodeType} from '../../enums/node-type';
import {IStringSchema} from '../interfaces/schema-interfaces';

export class NodeString extends Node implements IStringSchema {
  value: string;
  values: string[];
  minimalLength: number;
  maximalLength: number;


  constructor(label: string, value: string, schema?: Partial<IStringSchema>) {
    super(label, NodeType.STRING, schema);
    this.value = value;
    this.values = schema && schema.values || null;
    this.minimalLength = schema && schema.minimalLength || null;
    this.maximalLength = schema && schema.maximalLength || null;
  }

  isValid(): boolean {
    let isValid = true;
    if (this.minimalLength && this.value.length < this.minimalLength) {
      isValid = false;
    }
    if (this.maximalLength && this.value.length > this.maximalLength) {
      isValid = false;
    }
    return isValid;
  }
}
