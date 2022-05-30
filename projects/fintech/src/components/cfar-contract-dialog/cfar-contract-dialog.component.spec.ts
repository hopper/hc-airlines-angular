import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfarContractDialogComponent } from './cfar-contract-dialog.component';

describe('CfarContractDialogComponent', () => {
  let component: CfarContractDialogComponent;
  let fixture: ComponentFixture<CfarContractDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfarContractDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfarContractDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
