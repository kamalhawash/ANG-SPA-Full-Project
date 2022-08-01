import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatteacherComponent } from './creatteacher.component';

describe('CreatteacherComponent', () => {
  let component: CreatteacherComponent;
  let fixture: ComponentFixture<CreatteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
