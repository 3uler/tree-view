import {Node} from './node';
import {NodeType} from '../../enums/node-type';

export class NodeString extends Node {
  value: string;
  values: string[];
  minimalLength: number;
  maximalLength: number;


  constructor(label: string, value: string) {
    super(label, NodeType.STRING);
    this.value = value;
  }
}
