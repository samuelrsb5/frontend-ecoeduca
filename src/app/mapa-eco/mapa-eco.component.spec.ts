import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaEcoComponent } from './mapa-eco.component';

describe('MapaEcoComponent', () => {
  let component: MapaEcoComponent;
  let fixture: ComponentFixture<MapaEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapaEcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
