import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepassordComponent } from './changepassord.component';

describe('ChangepassordComponent', () => {
  let component: ChangepassordComponent;
  let fixture: ComponentFixture<ChangepassordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepassordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangepassordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
