import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopDisplayRoutingModule } from './desktop-display-routing.module';
import { DesktopDisplayComponent } from './desktop-display.component';
import {MatCardModule}from '@angular/material/card';
import {MatSidenavModule}from '@angular/material/sidenav';
import {MatButtonModule}from '@angular/material/button';
import {MatIconModule}from '@angular/material/icon';
import { PcTrendComponent } from './components/pc-trend/pc-trend.component';
import { PcButtonComponent } from './components/pc-button/pc-button.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DisplayModule } from '../display/display.module';

@NgModule({
  declarations: [
    DesktopDisplayComponent,
    PcTrendComponent,
    PcButtonComponent,
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
  ]
})
export class DesktopDisplayModule { }
