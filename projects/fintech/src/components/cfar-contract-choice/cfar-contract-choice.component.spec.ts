import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfarContractChoiceComponent } from './cfar-contract-choice.component';

describe('CfarContractChoiceComponent', () => {
  let component: CfarContractChoiceComponent;
  let fixture: ComponentFixture<CfarContractChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfarContractChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfarContractChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
