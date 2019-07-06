import {Component, Input, OnInit} from '@angular/core';
import {NodeBoolean} from '../../../../@core/datatypes/nodes/node-boolean';
import {Node} from '../../../../@core/datatypes/nodes/node';

@Component({
  selector: 'node-boolean',
  templateUrl: './node-boolean.component.html',
  styleUrls: ['./node-boolean.component.scss']
})
export class NodeBooleanComponent implements OnInit {
  @Input() node: Node;
  nodeBoolean: NodeBoolean;
  constructor() {
    this.nodeBoolean = this.node as NodeBoolean;
  }

  ngOnInit() {
  }

}
