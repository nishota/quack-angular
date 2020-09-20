import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule}from '@angular/material/card';
import {MatSidenavModule}from '@angular/material/sidenav';
import {MatButtonModule}from '@angular/material/button';
import {MatIconModule}from '@angular/material/icon';
import { MobileDisplayComponent } from './mobile-display.component';
import { SpButtonComponent } from './components/sp-button/sp-button.component';
import { SpTrendComponent } from './components/sp-trend/sp-trend.component';
import { SpLogoComponent } from './components/sp-logo/sp-logo.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DisplayModule } from '../display/display.module';

@NgModule({
  declarations: [
    MobileDisplayComponent,
    SpButtonComponent,
    SpTrendComponent,
    SpLogoComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    SidebarModule,
    DisplayModule
  ],
})
export class MobileDisplayModule { }
