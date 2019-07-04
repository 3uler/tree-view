import {Node} from './node';
import {Range} from '../range';

export class NodeArray extends Node {
  children: Node[];
  values: any[];
  minimumLength: number;
  maximumLength: number;
  range: Range;
}
