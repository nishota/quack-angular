import { Injectable } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { TweetData } from './model/tweet.model';
import { InfomationService } from './infomation.service';

@Injectable({
  providedIn: 'root'
})
export class WindowStateService {

  constructor(private is: InfomationService) { }

  /**
   * カード内のテキストが3行のときの高さ
   */
  cardMaxHeight = 112;
  cardMaxWidth = 300;

  innerWidth = window.innerWidth;
  innerHeight = window.innerHeight;
  windowIndex = Math.ceil(this.innerWidth / 300) + 1;
  cardDuration = 0.015 * 300 * this.windowIndex;
  cardDelay = 0;
  /**
   * ロード状態
   */
  isLoadingSource = new Subject<{ flag: boolean, message: string }>();
  isLoading$ = this.isLoadingSource.asObservable();

  contentSource = new Subject<TweetData>();
  content$ = this.contentSource.asObservable();
  trendSource = new Subject<string>();
  trend$ = this.trendSource.asObservable();

  infomation$ = this.is.getInfomation();
  quack$ = this.is.getQuackSystem();

  // TODO Resizeイベント
  windowResize$ = fromEvent(window, 'resize');
}
