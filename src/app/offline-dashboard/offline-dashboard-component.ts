import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'offline-dashboard',
  templateUrl: './offline-dashboard-component.html',
  styleUrls: ['./offline-dashboard-component.css']
})
export class OfflineDashboardComponent implements OnInit {

  constructor() {
  }

  public ngOnInit() {
      console.log('Load Offline dashboard component');
  }
}
