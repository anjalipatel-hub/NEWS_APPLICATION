import { Component, OnInit, ɵɵdeferEnableTimerScheduling } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrl: './top-headline.component.css'
})
export class TopHeadlineComponent implements OnInit {
  topHeadlineData: any = [];
  country: string = 'in';
  searchQuery: string = '';
  fromDate: string = '';
  toDate: string = '';
  constructor(private api: NewsApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['search'] || '';
      this.country = params['country'] || 'in';
      this.fromDate = params['from'] || '';
      this.toDate = params['to'] || '';

      if (this.country && this.searchQuery == '' && (this.fromDate == '' && this.toDate == '')) {
        this.api.getNewsByCountry(this.country).subscribe((result) => {
          this.topHeadlineData = result.articles;
        })
      } else if (this.searchQuery) {
        this.api.searchNews(this.searchQuery).subscribe((news) => {
          this.topHeadlineData = news.articles;
        });
      } else if (this.fromDate && this.toDate) {
        this.api.getNewsByDateRange(this.fromDate, this.toDate).subscribe((date) => {
          this.topHeadlineData = date.articles;
        });
      }
    });

  }

}
