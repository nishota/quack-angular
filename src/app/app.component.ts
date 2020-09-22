import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Description } from './model/description.model';
import { WindowStateService } from './window-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  threshold = 767;

  constructor(private router: Router, private ws: WindowStateService) {
  }

  ngOnInit(): void {
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
      this.router.navigate(['/mobile']);
    } else {
      this.router.navigate([this.setScreenType()]);
    }
  }

  ngOnDestroy(): void{
  }

  /*
  * 画面の横幅からPCかスマホか判別
  */
  setScreenType(): string {
    const width = window.innerWidth;
    if (width > this.threshold) {
      return '/desktop';
    } else {
      return '/mobile';
    }
  }
}
