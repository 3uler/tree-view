import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../../../../@core/datatypes/nodes/node';
import {NodeType} from '../../../../@core/enums/node-type';

@Component({
  selector: 'node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {
  @Input() children: Node[];
  nodeType = NodeType;

  constructor() {
  }

  ngOnInit() {
  }

  isObjectOrArray(node: Node): boolean {
    return node.type === NodeType.OBJECT || node.type === NodeType.ARRAY;
  }
}
