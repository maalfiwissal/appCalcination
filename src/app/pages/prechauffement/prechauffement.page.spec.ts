import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrechauffementPage } from './prechauffement.page';

describe('PrechauffementPage', () => {
  let component: PrechauffementPage;
  let fixture: ComponentFixture<PrechauffementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrechauffementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
