import {Node} from './node';

export class NodeString extends Node {
  value: string;
  values: string[];
  minimalLength: number;
  maximalLength: number;
}
