import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar.component';
import { InfomationComponent } from '../infomation/infomation.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    SidebarComponent,
    InfomationComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[SidebarComponent]
})
export class SidebarModule { }
