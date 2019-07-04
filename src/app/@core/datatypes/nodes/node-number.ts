import {Range} from '../range';
import {Node} from './node';
import {NodeType} from '../../enums/node-type';

export class NodeNumber extends Node {
  value: number;
  values: number[];
  range: Range;


  constructor(label: string, value: number) {
    super(label, NodeType.NUMBER);
    this.value = value;
  }
}
