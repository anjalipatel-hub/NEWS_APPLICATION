import { Component, OnInit } from '@angular/core';
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
  constructor(private api: NewsApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('para', params);
      this.country = params['country'] || 'in'; 
      this.api.getNewsByCountry(this.country).subscribe((result) => {
        this.topHeadlineData = result.articles;
      })
    });
  }

}
