import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstivenComponent } from './estiven.component';

describe('EstivenComponent', () => {
  let component: EstivenComponent;
  let fixture: ComponentFixture<EstivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
