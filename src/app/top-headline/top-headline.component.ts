import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';
import { resourceUsage } from 'process';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrl: './top-headline.component.css'
})
export class TopHeadlineComponent implements OnInit{
topHeadlineData:  any = [];
  constructor(private api: NewsApiService){}

  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result)=>{
      this.topHeadlineData = result.articles;
      console.log('res',result.articles);
    })
  }

}
