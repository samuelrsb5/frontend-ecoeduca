import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaAtividadeComponent } from './segunda-atividade.component';

describe('SegundaAtividadeComponent', () => {
  let component: SegundaAtividadeComponent;
  let fixture: ComponentFixture<SegundaAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SegundaAtividadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
