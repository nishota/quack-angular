import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'desktop', loadChildren: () => import('./desktop-display/desktop-display-routing.module').then(m => m.DesktopDisplayRoutingModule) },
  { path: 'mobile', loadChildren: () => import('./mobile-display/mobile-display-routing.module').then(m => m.MobileDisplayRoutingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
