import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar.component';
import {MatToolbarModule}from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  providers: [
  ],
  exports:[ToolbarComponent]
})
export class ToolbarModule { }
