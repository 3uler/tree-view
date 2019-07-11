import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeComponent} from './tree.component';
import {NodeBooleanComponent} from './nodes/node-boolean/node-boolean.component';
import {FormsModule} from '@angular/forms';
import {NodeObjectComponent} from './nodes/node-object/node-object.component';
import {NodeListComponent} from './nodes/node-list/node-list.component';
import { NodePrimitiveComponent } from './nodes/node-primitive/node-primitive.component';


@NgModule({
  declarations: [TreeComponent, NodeBooleanComponent, NodeObjectComponent, NodeListComponent,
    NodePrimitiveComponent
  ],
  exports: [
    TreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class TreeModule {
}
