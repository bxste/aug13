import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  totalCount: number | undefined;

  constructor(private dataService: ApiserviceService) {}

  ngOnInit(): void {
    this.fetchTotalRowCount();
  }

  fetchTotalRowCount(): void {
    this.dataService.getTotalRowCount().subscribe(
      (count) => {
        this.totalCount = count;
      },
      (error) => {
        console.error('Error fetching total row count:', error);
      }
    );
  }
}
