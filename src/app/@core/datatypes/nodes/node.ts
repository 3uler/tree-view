import {NodeType} from '../../enums/node-type';
import {IBaseSchema} from '../interfaces/schema-interfaces';

export class Node implements IBaseSchema {
  label: string;
  readonly: boolean;
  type: NodeType;
  selected: boolean;


  constructor(label: string, type: NodeType, readonly: boolean = false) {
    this.label = label;
    this.type = type;
    this.readonly = readonly;
  }
}
