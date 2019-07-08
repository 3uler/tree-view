import {Node} from './node';
import {Range} from '../range';
import {NodeType} from '../../enums/node-type';
import {IArraySchema} from '../interfaces/schema-interfaces';

export class NodeArray extends Node implements IArraySchema {
  children: Node[];
  values: any[];
  minimalLength: number;
  maximalLength: number;
  range: Range;


  constructor(label: string, children: Node[], schema?: Partial<IArraySchema>) {
    super(label, NodeType.ARRAY, schema);
    this.children = children;
    this.values = schema && schema.values || null;
    this.minimalLength = schema && schema.minimalLength || null;
    this.maximalLength = schema && schema.maximalLength || null;
    this.range = schema && schema.range ? new Range(schema.range) : null;
  }

  isValid(): boolean {
    return this.children.every((child) => child.isValid());
  }
}
