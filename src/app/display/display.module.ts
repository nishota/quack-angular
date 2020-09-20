import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayComponent } from './display.component';
import { TweetCardComponent } from '../tweet-card/tweet-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DisplayComponent,
    TweetCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [
  ],
  exports:[DisplayComponent]
})
export class DisplayModule { }
