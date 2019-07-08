import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../../../../@core/datatypes/nodes/node';
import {NodeString} from '../../../../@core/datatypes/nodes/node-string';

@Component({
  selector: 'node-string',
  templateUrl: './node-string.component.html',
  styleUrls: ['./node-string.component.scss']
})
export class NodeStringComponent implements OnInit {
  @Input() node: Node;
  nodeString: NodeString;

  constructor() {
  }

  ngOnInit() {
    this.nodeString = this.node as NodeString;
  }
}
