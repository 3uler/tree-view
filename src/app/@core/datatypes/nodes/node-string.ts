import {Node} from './node';
import {NodeType} from '../../enums/node-type';
import {IStringSchema} from '../interfaces/schema-interfaces';

export class NodeString extends Node implements IStringSchema {
  value: string;
  values: string[];
  minimalLength: number;
  maximalLength: number;


  constructor(label: string, value: string, schema?: Partial<IStringSchema>) {
    NodeString.validateSchema(schema);
    super(label, NodeType.STRING, schema);
    this.value = value;
    this.values = schema && schema.values || null;
    this.minimalLength = schema && schema.minimalLength || null;
    this.maximalLength = schema && schema.maximalLength || null;
  }

  private static validateSchema(schema: Partial<IStringSchema>): void {
    if (!schema) {
      return;
    }
    if (Object.keys(schema).includes('values') && !schema.values.every((value => typeof value === 'string'))) {
      throw new Error('Values must be of type string');
    }

    if (Object.keys(schema).includes('minimalLength') && !(typeof schema.minimalLength === 'number')) {
      throw new Error('MinimalLength must be of type number');
    }
    if (Object.keys(schema).includes('maximalLength') && !(typeof schema.maximalLength === 'number')) {
      throw new Error('MaximalLength must be of type number');
    }
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
