import {NodeType} from '../../enums/node-type';
import {IBaseSchema} from '../interfaces/schema-interfaces';

export class Node implements IBaseSchema {
  label: string;
  readonly: boolean;
  type: NodeType;
  selected = false;


  constructor(label: string, type: NodeType, schema?: Partial<IBaseSchema>) {
    this.label = label;
    this.type = type;
    this.readonly = schema && schema.readonly || false;
  }
}
