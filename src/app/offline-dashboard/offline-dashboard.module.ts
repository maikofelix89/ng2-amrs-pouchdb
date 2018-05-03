import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, RequestOptions, XHRBackend } from '@angular/http';
import { RouterModule , Router } from '@angular/router';
import { SessionStorageService } from '../utils/session-storage.service';
import { HttpClient } from '../shared/services/http-client.service';
import { OfflineDashboardComponent } from './offline-dashboard-component';
import { offlineDashboardRouting } from './offline-dashboard-routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    offlineDashboardRouting
  ],
  declarations: [
      OfflineDashboardComponent
  ],
  providers: [
    {
      provide: Http,
      useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions,
                   router: Router, sessionStorageService: SessionStorageService) =>
        new HttpClient(xhrBackend, requestOptions, router, sessionStorageService),
      deps: [XHRBackend, RequestOptions, Router, SessionStorageService]
    }
  ],
  exports: [ OfflineDashboardComponent]
})

export class OfflineDashboardModule {}
