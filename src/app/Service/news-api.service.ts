import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private baseUrl = 'https://newsapi.org/v2/';
  private apiKey = 'e76927f5e2a740189d44e62ffeeb81fe';

  constructor(private _httpService: HttpClient) { }
  selectedCountry: string = '';
  
  topHeadlinesNews = `${this.baseUrl}?country=in&apiKey=${this.apiKey}`;
  techNews = `${this.baseUrl}?country=in&category=technology&apiKey=${this.apiKey}`;
  
  // tcHeadlines(): Observable<any> {
  //   return this._httpService.get(this.topHeadlinesNews);
  // }

  tcTechNews(): Observable<any> {
    return this._httpService.get(this.techNews);
  }

  getNewsByCountry(countryCode: string): Observable<any> {
    this.baseUrl = 'https://newsapi.org/v2/top-headlines';
    const url = `${this.baseUrl}?country=${countryCode}&apiKey=${this.apiKey}`;
    return this._httpService.get(url);
  }
  getNewsByDateRange(from: string, to: string): Observable<any> {
    this.baseUrl = "https://newsapi.org/v2/";
    const url = `${this.baseUrl}everything?q=apple&from=${from}&to=${to}&apiKey=${this.apiKey}`;
    return this._httpService.get<any>(url);
  }

  // Search news by query
  searchNews(query: string): Observable<any> {
    this.baseUrl ="https://newsapi.org/v2/"
    const url = `${this.baseUrl}everything?q=${query}&apiKey=${this.apiKey}`;
    return this._httpService.get<any>(url);
  }
}
