import {Component, OnInit} from '@angular/core';
import {Node} from '../../@core/datatypes/nodes/node';
import {NodeType} from '../../@core/enums/node-type';
import {TreeBuilder} from '../../@core/parser/tree-builder';
import {source} from '../../input-mock/source';
import {schema} from '../../input-mock/schema';
import {NodeObject} from '../../@core/datatypes/nodes/node-object';
import {ValidationService} from '../../@core/service/validation.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  treeNodes: Node[];
  validated = false;
  valid: boolean;

  constructor(private validationService: ValidationService) {
    this.treeNodes = TreeBuilder.parseJson(source, schema);
  }

  ngOnInit() {
  }

  private removeSelected(): void {
    this.removeSelectedNodes(this.treeNodes);
  }

  private removeSelectedNodes(nodes: Node[]) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.selected) {
        nodes.splice(i, 1);
      }
      if (node.type === NodeType.OBJECT || node.type === NodeType.ARRAY) {
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
