import {NodeType} from '../../enums/node-type';

export class Node {
  label: string;
  readonly: boolean;
  type: NodeType;
  selected: boolean;
}
