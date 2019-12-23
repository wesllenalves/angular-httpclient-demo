import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditeComponent } from './user-edite.component';

describe('UserEditeComponent', () => {
  let component: UserEditeComponent;
  let fixture: ComponentFixture<UserEditeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
