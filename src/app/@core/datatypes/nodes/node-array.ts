import {Node} from './node';
import {Range} from '../range';
import {NodeType} from '../../enums/node-type';

export class NodeArray extends Node {
  children: Node[];
  values: any[];
  minimumLength: number;
  maximumLength: number;
  range: Range;


  constructor(label: string, children: Node[]) {
    super(label, NodeType.ARRAY);
    this.children = children;
  }
}
