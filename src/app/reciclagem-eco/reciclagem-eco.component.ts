import { Component } from '@angular/core';

@Component({
    selector: 'app-reciclagem-eco',
    templateUrl: './reciclagem-eco.component.html',
    styleUrl: './reciclagem-eco.component.css',
    standalone: false
})
export class ReciclagemEcoComponent {
    correctBin = 'blue'; // Exemplo: papel deve ir na lixeira azul
    feedback: string | null = null;
  
    checkAnswer(selectedBin: string) {
      if (selectedBin === this.correctBin) {
        this.feedback = 'Parabéns! Você escolheu a lixeira correta!';
      } else {
        this.feedback = 'Ops! Tente novamente.';
      }
    }
}
