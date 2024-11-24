import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafiosEcoComponent } from './desafios-eco.component';

describe('DesafiosEcoComponent', () => {
  let component: DesafiosEcoComponent;
  let fixture: ComponentFixture<DesafiosEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesafiosEcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesafiosEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
