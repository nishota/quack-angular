import { Injectable } from '@angular/core';
import { Observable, Subscription, throwError, timer } from 'rxjs';
import { retryWhen, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { WindowStateService } from './window-state.service';
import { TweetData, ITweetData, ITrend } from './model/tweet.model';
import { ConnectionMode, Count, Message } from '../environments/const.environment';
import { Socket } from './util/socket-io.util';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CommunicationService {
  count = 0;
  getTweetSubscription: Subscription;
  getTrendSubscription: Subscription;

  constructor(private state: WindowStateService) {
    Socket.connect('');
  }

  /**
   * ツイート取得処理
   */
  getTweetData(): void {
    this.getTrendSubscription = this.getTrendFromSocketIO().subscribe(
      (res: ITrend) =>{
        this.state.trendSource.next(res.name);
      },
      () => {
        this.getTrendSubscription.unsubscribe();
      });
    this.getTweetSubscription = this.getTweetFromSocketIO().subscribe(
      (res: ITweetData) => {
        const tweetData: TweetData = new TweetData(
          this.count % Count.Card,
          res.text, res.usr.name,
          environment.twitterUrl + res.usr.id,
          res.date.toLocaleString(),
          0, false, true, 0);
        this.count++;
        this.state.contentSource.next(tweetData);
        this.state.isLoadingSource.next({ flag: false, message: Message.empty });
      },
      () => {
        this.state.isLoadingSource.next({ flag: true, message: Message.connectionFailed });
        Socket.Connection.close();
        this.getTweetSubscription.unsubscribe();
      });
  }

  private getObjectFromSokcetIo<T>(connectionString: ConnectionMode): Observable<T> {
    const sec = 1000;
    const retryCount = 5;
    const obs = Socket.on<T>(connectionString);
    return obs.pipe(
      retryWhen((errors) => {
        return errors.pipe(
          mergeMap((e, index) => {
            this.state.isLoadingSource.next({ flag: true, message: e });
            if (index > retryCount) {
              return throwError(e);
            }
            return timer((index + 1) * sec);
          })
        );
      })
    );
  }

  getTweetFromSocketIO(): Observable<ITweetData> {
    return this.getObjectFromSokcetIo<ITweetData>(ConnectionMode.GetTweet);
  }

  getTrendFromSocketIO(): Observable<ITrend> {
    return this.getObjectFromSokcetIo<ITrend>(ConnectionMode.GetTrend);
  }
}
