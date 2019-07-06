import {NodeNumber} from '../datatypes/nodes/node-number';
import {NodeString} from '../datatypes/nodes/node-string';
import {Node} from '../datatypes/nodes/node';
import {NodeObject} from '../datatypes/nodes/node-object';
import {NodeBoolean} from '../datatypes/nodes/node-boolean';
import {NodeArray} from '../datatypes/nodes/node-array';
import {TreeBuilder} from './tree-builder';

describe('TreeBuilder', () => {
  it('should build simple tree from source.json (no schema)', () => {
    // init
    const source = {
      a: 12,
      b: 'bb',
      c: {
        c1: 123,
        c2: true
      },
      d: [1, 2, 3]
    };

    const expectedTree: Node[] = [
      new NodeNumber('a', 12),
      new NodeString('b', 'bb'),
      new NodeObject('c', [
        new NodeNumber('c1', 123),
        new NodeBoolean('c2', true)
      ]),
      new NodeArray('d', [
        new NodeNumber('0', 1),
        new NodeNumber('1', 2),
        new NodeNumber('2', 3)
      ])
    ];
    // run
    const tree = TreeBuilder.parseJson(source);
    // assert
    expect(tree).toEqual(expectedTree);
  });

  it('should build simple tree from source and schema.', () => {
    // init
    const source = {
      a: 12,
      b: 'bb',
      c: {
        c1: 123,
        c2: true
      },
      d: [1, 2, 3]
    };

    const schema = {
      b: {
        minimalLength: 2,
        maximalLength: 5
      },
      c: {
        c1: {
          readonly: true
        }
      },
      d: {
        range: {
          from: 0,
          to: 5
        }
      }
    };

    const expectedTree: Node[] = [
      new NodeNumber('a', 12),
      new NodeString('b', 'bb', {minimalLength: 2, maximalLength: 5}),
      new NodeObject('c', [
        new NodeNumber('c1', 123, {readonly: true}),
        new NodeBoolean('c2', true)
      ]),
      new NodeArray('d', [
        new NodeNumber('0', 1, {range: {from: 0, to: 5}}),
        new NodeNumber('1', 2, {range: {from: 0, to: 5}}),
        new NodeNumber('2', 3, {range: {from: 0, to: 5}})
      ], {range: {from: 0, to: 5}})
    ];

    // run
    const tree = TreeBuilder.parseJson(source, schema);
    // assert
    expect(tree).toEqual(expectedTree);
  });

  it('should generate readonly Node', function () {
    // run
    const nodeNumber = new NodeNumber('a', 123, {readonly: true});
    // assert
    expect(nodeNumber.readonly).toEqual(true);
  });
});
