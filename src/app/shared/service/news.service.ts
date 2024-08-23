import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiKey: string = '2661f19515e64f32904da879de7238a9';
  baseUrl: string = 'https://newsapi.org/v2/top-headlines';
  countrySubject: BehaviorSubject<string> = new BehaviorSubject<string>('in');
  newsObjSubject: Subject<any> = new Subject<any>();
  querySubject: Subject<string> = new Subject<string>();

  constructor(
    private _http: HttpClient
  ) { }

  fetchNewsForCountry(country: string): Observable<any> {
    const url = `${this.baseUrl}?country=${country}&apiKey=${this.apiKey}`;
    return this._http.get(url);
  }
}
