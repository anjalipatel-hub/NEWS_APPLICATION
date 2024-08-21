import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
  {path:'', component: TopHeadlineComponent},
  {path:'tech', component: TechNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
