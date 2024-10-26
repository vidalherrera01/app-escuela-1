import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscribitePage } from './inscribite.page';

describe('InscribitePage', () => {
  let component: InscribitePage;
  let fixture: ComponentFixture<InscribitePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InscribitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
