import { Component, OnInit } from '@angular/core';
import { OfflineStorageService } from './offline-storage.service';
import PouchDB from 'pouchdb';

@Component({
  selector: 'app-offline-storage',
  templateUrl: './offline-storage.component.html',
  styleUrls: ['./offline-storage.component.css']
})
export class OfflineStorageComponent implements OnInit {

  constructor(private _offlineStorageService: OfflineStorageService) {

  }

  public execute() {
    this._offlineStorageService.storeData();
  }

  public ngOnInit() {
    this.execute();
  }

}
