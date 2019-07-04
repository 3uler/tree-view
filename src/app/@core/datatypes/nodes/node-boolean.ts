import {Node} from './node';
import {NodeType} from '../../enums/node-type';
import {IBaseSchema} from '../interfaces/schema-interfaces';

export class NodeBoolean extends Node {
  value: boolean;


  constructor(label: string, value: boolean, schema?: IBaseSchema) {
    super(label, NodeType.BOOLEAN, schema && schema.readonly || false);
    this.value = value;
  }
}
