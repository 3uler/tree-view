import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../../../../@core/datatypes/nodes/node';
import {NodeObject} from '../../../../@core/datatypes/nodes/node-object';

@Component({
  selector: 'app-node-object',
  templateUrl: './node-object.component.html',
  styleUrls: ['./node-object.component.scss']
})
export class NodeObjectComponent implements OnInit {
  @Input() node: Node;
  nodeObject: NodeObject;
  constructor() { }

  ngOnInit() {
    this.nodeObject = this.node as NodeObject;
  }

}
