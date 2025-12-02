import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSuccessfullSignUp } from './auth-successfull-sign-up';

describe('AuthSuccessfullSignUp', () => {
  let component: AuthSuccessfullSignUp;
  let fixture: ComponentFixture<AuthSuccessfullSignUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSuccessfullSignUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSuccessfullSignUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
