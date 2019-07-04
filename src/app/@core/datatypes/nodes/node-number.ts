import {Range} from '../range';
import {Node} from './node';

export class NodeNumber extends Node {
  value: number;
  values: number[];
  range: Range;
}
