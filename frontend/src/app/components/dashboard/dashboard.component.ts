import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  careData: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCareData().subscribe({
      next: data => this.careData = data,
      error: err => console.error('API error:', err)
    });
  }
}

