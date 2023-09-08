import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUserPage } from './create-user.page';

describe('CreateUserPage', () => {
  let component: CreateUserPage;
  let fixture: ComponentFixture<CreateUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

