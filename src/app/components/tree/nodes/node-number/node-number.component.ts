import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Node} from '../../../../@core/datatypes/nodes/node';
import {NodeNumber} from '../../../../@core/datatypes/nodes/node-number';
import {ValidationService} from '../../../../@core/service/validation.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'node-number',
  templateUrl: './node-number.component.html',
  styleUrls: ['./node-number.component.scss']
})
export class NodeNumberComponent implements OnInit, OnDestroy {
  @Input() node: Node;
  nodeNumber: NodeNumber;
  showValidation: boolean;
  unsubscribeAll = new Subject();

  constructor(private validationService: ValidationService) {
    validationService.onValidate().pipe(takeUntil(this.unsubscribeAll)).subscribe(() => this.showValidation = true);
  }

  ngOnInit() {
    this.nodeNumber = this.node as NodeNumber;
    this.showValidation = this.validationService.showValidation;
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
