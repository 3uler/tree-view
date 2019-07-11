import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Node} from '../../../../@core/datatypes/nodes/node';
import {NodeNumber} from '../../../../@core/datatypes/nodes/node-number';
import {NodeString} from '../../../../@core/datatypes/nodes/node-string';
import {NodeType} from '../../../../@core/enums/node-type';
import {Subject} from 'rxjs';
import {ValidationService} from '../../../../@core/service/validation.service';
import {takeUntil} from 'rxjs/operators';

type NodePrimitive = NodeNumber | NodeString;

@Component({
  selector: 'node-primitive',
  templateUrl: './node-primitive.component.html',
  styleUrls: ['./node-primitive.component.scss']
})
export class NodePrimitiveComponent implements OnInit, OnDestroy {
  @Input() node: Node;
  nodePrim: NodePrimitive;
  showValidation: boolean;
  unsubscribeAll = new Subject();

  constructor(private validationService: ValidationService) {
    validationService.onValidate().pipe(takeUntil(this.unsubscribeAll)).subscribe(() => this.showValidation = true);
  }

  ngOnInit() {
    this.nodePrim = this.assignNodePrimitive(this.node);
    this.showValidation = this.validationService.showValidation;
  }

  private assignNodePrimitive(node: Node): NodePrimitive {
    if (node.type === NodeType.NUMBER) {
      return node as NodeNumber;
    }
    if (node.type === NodeType.STRING) {
      return node as NodeString;
    }
    throw new Error('No primitive type.');
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  private getType(): string {
    if (this.node.type === NodeType.STRING) {
      return 'text';
    }
    return 'number';
  }
}
