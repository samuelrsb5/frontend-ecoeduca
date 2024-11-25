import { Component } from '@angular/core';

@Component({
    selector: 'app-reciclagem-eco',
    templateUrl: './reciclagem-eco.component.html',
    styleUrl: './reciclagem-eco.component.css',
    standalone: false
})
export class ReciclagemEcoComponent {
  material: { name: string; correctBin: string; image: string } = {
    name: 'Papel',
    correctBin: 'blue',
    image: 'https://img.icons8.com/?size=100&id=HqZT9IIJSk1p&format=png&color=00509e'
  };

  feedback: string | null = null;
  showNextButton: boolean = false; // Controla a exibição do botão "Próxima Atividade"

  // Função para verificar se a escolha está correta
  checkAnswer(selectedBin: string): void {
    if (selectedBin === this.material.correctBin) {
      this.feedback = 'Correto! Este material deve ser descartado na lixeira ' + this.material.correctBin + '.';
      this.showNextButton = true; // Exibe o botão "Próxima Atividade" ao acertar
    } else {
      this.feedback = 'Errado! Tente novamente.'; // Permite tentar novamente
      this.showNextButton = false;
    }
  }
}
