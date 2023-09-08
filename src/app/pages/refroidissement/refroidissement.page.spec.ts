import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefroidissementPage } from './refroidissement.page';

describe('RefroidissementPage', () => {
  let component: RefroidissementPage;
  let fixture: ComponentFixture<RefroidissementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RefroidissementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
