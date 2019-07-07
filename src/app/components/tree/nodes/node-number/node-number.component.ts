import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../../../../@core/datatypes/nodes/node';
import {NodeNumber} from '../../../../@core/datatypes/nodes/node-number';

@Component({
  selector: 'node-number',
  templateUrl: './node-number.component.html',
  styleUrls: ['./node-number.component.scss']
})
export class NodeNumberComponent implements OnInit {
  @Input() node: Node;
  nodeNumber: NodeNumber;
  constructor() { }

  ngOnInit() {
    this.nodeNumber = this.node as NodeNumber;
  }

}
