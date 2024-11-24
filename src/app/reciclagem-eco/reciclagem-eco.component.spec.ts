import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciclagemEcoComponent } from './reciclagem-eco.component';

describe('ReciclagemEcoComponent', () => {
  let component: ReciclagemEcoComponent;
  let fixture: ComponentFixture<ReciclagemEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReciclagemEcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciclagemEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
