import { Component } from '@angular/core';
import { NewsApiService } from './Service/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NEWS-App';
  searchQuery: string = '';
  country: string = 'in';
  fromDate: Date | null = null;
  toDate: Date | null = null;
  newsList: any[] = [];
  data: any;

  constructor(private newsService: NewsApiService) {}

  // Method to fetch and filter news by country
  filterByCountry(countryCode: string) {
    this.newsService.selectedCountry = countryCode;
    console.log('cc',countryCode);
    this.newsService.getNewsByCountry(countryCode).subscribe((news) => {
      this.newsList = news.articles;
    });
  }

  // Method to filter by date range
  filterByDateRange() {
    console.log('2432424');
    // if (this.fromDate && this.toDate) {
      const formattedFromDate = this.formatDate(this.fromDate);
      const formattedToDate = this.formatDate(this.toDate);
      this.newsService.getNewsByDateRange(formattedFromDate, formattedToDate).subscribe((news) => {
        this.newsList = news.articles;
        // this.newsService.baseUrl = 'https://newsapi.org/v2/top-headlines';
      });
    // }
  }

  // Method to handle search
  onSearchSubmit(event: Event) {
    event.preventDefault();
    this.data = event;
    if (this.searchQuery.trim()) {
      this.newsService.searchNews(this.searchQuery).subscribe((news) => {
        this.newsList = news.articles;
      });
    }
  }

  formatDate(date: Date | null): string {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
