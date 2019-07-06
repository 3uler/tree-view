import {Node} from '../datatypes/nodes/node';
import {NodeBoolean} from '../datatypes/nodes/node-boolean';
import {NodeNumber} from '../datatypes/nodes/node-number';
import {NodeString} from '../datatypes/nodes/node-string';
import {NodeObject} from '../datatypes/nodes/node-object';
import {NodeArray} from '../datatypes/nodes/node-array';

export class TreeBuilder {
  static parseJson(source: object, schema?: object): Node[] {
    return this.traverseObjectRecursivelyAndReturnNodes(source, schema);
  }

  private static traverseObjectRecursivelyAndReturnNodes(source: object, schema: object = null): Node[] {
    const branch: Node[] = [];
    const schemaKeys = schema ? Object.keys(schema) : [];
    for (const key of Object.keys(source)) {
      let schemaElement: object = null;
      if (schemaKeys.includes(key)) {
        schemaElement = schema[key];
      }
      branch.push(this.generateNodeFromType(key, source[key], schemaElement));
    }
    return branch;
  }

  private static generateNodeFromType(key: string, source: any, schema: any): Node {
    if (typeof source === 'boolean') {
      return new NodeBoolean(key, source, schema);
    } else if (typeof source === 'number') {
      return new NodeNumber(key, source, schema);
    } else if (typeof source === 'string') {
      return new NodeString(key, source, schema);
    } else if (typeof source === 'object' && !Array.isArray(source)) {
      return new NodeObject(key, this.traverseObjectRecursivelyAndReturnNodes(source, schema));
    } else if (typeof source === 'object' && Array.isArray(source)) {
      const childArray: Node[] = [];
      for (let i = 0; i < source.length; i++) {
        childArray.push(this.generateNodeFromType(i.toString(10), source[i], schema));
      }
      return new NodeArray(key, childArray, schema);
    } else {
      throw new Error('Invalid type was given: ' + (typeof source));
    }
  }
}
