import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './Service/news-api.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadlineComponent,
    TechNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  providers: [
    provideClientHydration(),
    NewsApiService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
