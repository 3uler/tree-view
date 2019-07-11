import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  protected validateEmitter = new Subject();
  showValidation = false;

  constructor() { }

  validate(): void {
    this.showValidation = true;
    this.validateEmitter.next();
  }

  onValidate(): Observable<{}> {
    return this.validateEmitter;
  }
}
