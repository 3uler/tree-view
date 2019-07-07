import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { NodeBooleanComponent } from './nodes/node-boolean/node-boolean.component';
import {FormsModule} from '@angular/forms';
import { NodeNumberComponent } from './nodes/node-number/node-number.component';
import { NodeStringComponent } from './nodes/node-string/node-string.component';
import { NodeObjectComponent } from './nodes/node-object/node-object.component';



@NgModule({
  declarations: [TreeComponent, NodeBooleanComponent, NodeNumberComponent, NodeStringComponent, NodeObjectComponent],
  exports: [
    TreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TreeModule { }
