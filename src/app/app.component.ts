import {Component} from '@angular/core';
import {source} from './input-mock/source';
import {schema} from './input-mock/schema';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  source: object;
  schema: object;

  constructor() {
    this.source = source;
    this.schema = schema;
  }
}
