import {Component, OnInit} from '@angular/core';
import {Node} from '../../@core/datatypes/nodes/node';
import {NodeType} from '../../@core/enums/node-type';
import {TreeBuilder} from '../../@core/parser/tree-builder';
import {source} from '../../input-mock/source';
import {schema} from '../../input-mock/schema';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  treeNodes: Node[];
  private nodeType = NodeType;
  constructor() {
    this.treeNodes = TreeBuilder.parseJson(source, schema);
  }

  ngOnInit() {
  }

}
