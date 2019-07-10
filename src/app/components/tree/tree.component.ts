import {Component, Input, OnInit} from '@angular/core';
import {Node} from '../../@core/datatypes/nodes/node';
import {NodeType} from '../../@core/enums/node-type';
import {TreeBuilder} from '../../@core/parser/tree-builder';
import {NodeObject} from '../../@core/datatypes/nodes/node-object';
import {ValidationService} from '../../@core/service/validation.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() source;
  @Input() schema;
  treeNodes: Node[];
  validated = false;
  valid: boolean;

  constructor(private validationService: ValidationService) {
  }

  ngOnInit() {
    this.treeNodes = TreeBuilder.parseJson(this.source, this.schema);
  }

  private removeSelected(): void {
    this.removeSelectedNodes(this.treeNodes);
  }

  private removeSelectedNodes(nodes: Node[]) {
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      if (node.selected) {
        nodes.splice(i, 1);
      }
      if (!node.selected && (node.type === NodeType.OBJECT || node.type === NodeType.ARRAY)) {
        this.removeSelectedNodes((node as NodeObject).children);
      }
    }
  }

  validate(): void {
    this.valid = this.treeNodes.every((node) => node.isValid());
    this.validationService.validate();
    this.validated = true;
  }
}
