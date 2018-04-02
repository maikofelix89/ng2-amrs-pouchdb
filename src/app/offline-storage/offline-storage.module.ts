import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsModule } from '../app-settings';
import { PatientResourceService } from '../openmrs-api/patient-resource.service';
import { OfflineStorageService } from './offline-storage.service';
import { OfflineStorageComponent } from './offline-storage.component';

@NgModule({
  imports: [CommonModule, AppSettingsModule],
  declarations: [OfflineStorageComponent],
  providers: [
    PatientResourceService,
    OfflineStorageService
  ],
  exports: []
})

export class OfflineStorage {
}
