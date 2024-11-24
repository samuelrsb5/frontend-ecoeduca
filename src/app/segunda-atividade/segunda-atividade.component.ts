import { Component } from '@angular/core';

@Component({
  selector: 'app-segunda-atividade',
  standalone: false,
  
  templateUrl: './segunda-atividade.component.html',
  styleUrl: './segunda-atividade.component.css'
})
export class SegundaAtividadeComponent {
  correctBin: string | null = null;
  feedback: string | null = null;

  startDrag(material: string) {
    this.correctBin = material;
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(bin: string) {
    if (this.correctBin === bin) {
      this.feedback = 'Parabéns! Você classificou o resíduo corretamente!';
    } else {
      this.feedback = 'Ops! Esse não é o local correto.';
    }
    this.correctBin = null;
  }
}
