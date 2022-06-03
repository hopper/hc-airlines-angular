import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfarExerciseDialogComponent } from './cfar-exercise-dialog.component';

describe('CfarExerciseDialogComponent', () => {
  let component: CfarExerciseDialogComponent;
  let fixture: ComponentFixture<CfarExerciseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfarExerciseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfarExerciseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
