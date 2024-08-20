import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private _httpService: HttpClient) { }
  topHeadlinesNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=e76927f5e2a740189d44e62ffeeb81fe';

  tcHeadlines(): Observable<any> {
    return this._httpService.get(this.topHeadlinesNews);
  }
}
