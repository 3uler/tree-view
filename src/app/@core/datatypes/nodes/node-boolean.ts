import {Node} from './node';
import {NodeType} from '../../enums/node-type';

export class NodeBoolean extends Node {
  value: boolean;


  constructor(label: string, value: boolean) {
    super(label, NodeType.BOOLEAN);
    this.value = value;
  }
}
