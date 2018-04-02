import { Injectable } from '@angular/core';
import { PatientResourceService } from '../openmrs-api/patient-resource.service';
import PouchDB from 'pouchdb';

@Injectable()
export class OfflineStorageService {
  public db = new PouchDB('http://localhost:5984/db');

  constructor( private _patientResourceService: PatientResourceService) {}

  public storeData() {
    /* let patientdata = this._patientResourceService.getPatientByUuid(
      '5d386b7a-1359-11df-a1f1-0026b9348838');
    console.log('patientdata' + patientdata); */
    let doc = {
      '_id': 'patient data',
      'identifiers': [
        '121212 test testRUTH test',
        '433360660-8 test kuku test',
        '456589785 test Port panda test',
        '00112233 test mini test'
      ]
    }
    console.log(doc);
    this.db.put(doc);
  }

}
