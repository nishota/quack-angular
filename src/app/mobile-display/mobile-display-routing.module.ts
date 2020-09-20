import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileDisplayComponent } from './mobile-display.component';
import { MobileDisplayModule } from './mobile-display.module';

const routes: Routes = [{ path: '', component: MobileDisplayComponent }];

@NgModule({
  imports: [
    MobileDisplayModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MobileDisplayRoutingModule { }
