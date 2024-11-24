import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriasEcoComponent } from './historias-eco.component';

describe('HistoriasEcoComponent', () => {
  let component: HistoriasEcoComponent;
  let fixture: ComponentFixture<HistoriasEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriasEcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriasEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
