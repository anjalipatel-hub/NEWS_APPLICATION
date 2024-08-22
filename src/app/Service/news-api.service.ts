import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsResponse } from '../models/news-response';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private baseUrl = 'https://newsapi.org/v2/top-headlines';
  private apiKey = 'e76927f5e2a740189d44e62ffeeb81fe';

  constructor(private _httpService: HttpClient) { }

  getNewsByCountry(countryCode: string): Observable<NewsResponse> {
    const url = `${this.baseUrl}?country=${countryCode}&apiKey=${this.apiKey}`;
    return this._httpService.get<NewsResponse>(url);
  }
  getNewsByDateRange(from: string, to: string): Observable<NewsResponse> {
    this.baseUrl = "https://newsapi.org/v2/";
    const url = `${this.baseUrl}everything?q=apple&from=${from}&to=${to}&apiKey=${this.apiKey}`;
    return this._httpService.get<NewsResponse>(url);
  }

  searchNews(query: string): Observable<NewsResponse> {
    this.baseUrl ="https://newsapi.org/v2/"
    const url = `${this.baseUrl}everything?q=${query}&apiKey=${this.apiKey}`;
    return this._httpService.get<NewsResponse>(url);
  }
}
