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
    if (this.belowLowerBound()) {
      isValid = false;
    }
    if (this.aboveUpperBound()) {
      isValid = false;
    }
    return isValid;
  }

  getValidationMessage(): string {
    let message = '';
    if (!this.isValid() && this.belowLowerBound()) {
      message = 'The entry must contain at least ' + this.minimalLength + ' characters';
    }
    if (!this.isValid() && this.aboveUpperBound()) {
      message = 'The entry must contain more than ' + this.maximalLength + ' characters';
    }
    return message;
  }

  private belowLowerBound(): boolean {
    return this.minimalLength && this.value.length < this.minimalLength;
  }

  private aboveUpperBound(): boolean {
    return this.maximalLength && this.value.length > this.maximalLength;
  }
}
