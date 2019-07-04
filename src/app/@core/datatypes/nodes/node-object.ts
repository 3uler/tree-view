import {Node} from './node';
import {NodeType} from '../../enums/node-type';

export class NodeObject extends Node {
  children: Node[];


  constructor(label: string, children: Node[]) {
    super(label, NodeType.OBJECT);
    this.children = children;
  }
}
