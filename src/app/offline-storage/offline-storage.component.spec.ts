import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineStorageComponent } from './offline-storage.component';

describe('OfflineStorageComponent', () => {
  let component: OfflineStorageComponent;
  let fixture: ComponentFixture<OfflineStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
