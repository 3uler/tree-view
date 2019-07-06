import { Component, OnInit } from '@angular/core';
import {Node} from '../../@core/datatypes/nodes/node';
import {NodeType} from '../../@core/enums/node-type';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  treeNodes: Node[];
  private nodeType = NodeType;
  constructor() { }

  ngOnInit() {
  }

}
