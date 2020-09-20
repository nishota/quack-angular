import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesktopDisplayComponent } from './desktop-display.component';
import { DesktopDisplayModule } from './desktop-display.module';

const routes: Routes = [{ path: '', component: DesktopDisplayComponent }];

@NgModule({
  imports: [
    DesktopDisplayModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DesktopDisplayRoutingModule { }
