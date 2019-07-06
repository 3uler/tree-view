import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { NodeBooleanComponent } from './nodes/node-boolean/node-boolean.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [TreeComponent, NodeBooleanComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TreeModule { }
