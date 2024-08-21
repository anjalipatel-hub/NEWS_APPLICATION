import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrl: './tech-news.component.css'
})
export class TechNewsComponent implements OnInit{
  techNewsData: any = [];
  constructor(private api: NewsApiService){}

  ngOnInit(): void {
    this.api.tcTechNews().subscribe((result)=>{
      this.techNewsData = result.articles;
    })
  }

}
