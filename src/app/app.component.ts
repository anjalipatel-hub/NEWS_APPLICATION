import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NEWS-App';
  searchQuery: any;
  fromDate: Date | null = null;
  toDate: Date | null = null;
}
