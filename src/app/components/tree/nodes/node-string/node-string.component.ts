import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Node} from '../../../../@core/datatypes/nodes/node';
import {NodeString} from '../../../../@core/datatypes/nodes/node-string';
import {Subject} from 'rxjs';
import {ValidationService} from '../../../../@core/service/validation.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'node-string',
  templateUrl: './node-string.component.html',
  styleUrls: ['./node-string.component.scss']
})
export class NodeStringComponent implements OnInit, OnDestroy {
  @Input() node: Node;
  nodeString: NodeString;
  showValidation: boolean;
  unsubscribeAll = new Subject();

  constructor(private validationService: ValidationService) {
    validationService.onValidate().pipe(takeUntil(this.unsubscribeAll)).subscribe(() => this.showValidation = true);
  }

  ngOnInit() {
    this.nodeString = this.node as NodeString;
    this.showValidation = this.validationService.showValidation;
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  private showLowerLimitValidation(): boolean {
    return this.nodeString.minimalLength && !(this.nodeString.minimalLength <= this.nodeString.value.length);
  }

  private showUpperLimitValidation(): boolean {
    return this.nodeString.maximalLength && !(this.nodeString.maximalLength >= this.nodeString.value.length);
  }

}
