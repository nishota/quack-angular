import { ConnectionMode } from '../../environments/const.environment';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as io from 'socket.io-client';

export class Socket {
    private static url = environment.socketUrl;
    public static Connection: SocketIOClient.Socket;

    // TODO: rxjsで全て記述したい
  static connect(queryString: string) {
    this.Connection = io(this.url,
      {
        query: queryString,
        path: environment.pathString
      });
  }

  static emit<T>(emitName: string, data?: T) {
    this.Connection.emit(emitName, data);
  }

  static on<T>(onName: string): Observable<T> {
    const observable = new Observable<T>(observer => {
      this.Connection.on(onName, (data: T) => {
        observer.next(data);
      });
      this.Connection.on('connect_error', () => {
        const errMsg = 'Connection Error...';
        observer.error(errMsg);
      });
      this.Connection.on('connect_timeout', () => {
        const errMsg = 'Connection Timeout...';
        observer.error(errMsg);
      });
    });
    return observable;
  }

  static disconnect() {
    this.emit(ConnectionMode.Disconnect);
  }
}
