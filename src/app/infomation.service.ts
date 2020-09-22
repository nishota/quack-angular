import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Infomation } from './model/infomation.model';
import { Description } from './model/description.model';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { QuackSystem } from './model/quack-system.model';

/**
 * アセットをフロント側を配置しているサーバから取りに行く。
 */
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class InfomationService {
  constructor(private http: HttpClient) { }
  private getData<T>(url: string): Observable<T>{return this.http.get<T>(url);}
  getInfomation(): Observable<Infomation[]> {
    return this.getData<Infomation[]>(environment.infoUrl);
  }
  getQuackSystem(): Observable<QuackSystem> {
    return this.getData<QuackSystem>(environment.quackSystemUrl);
  }
}
