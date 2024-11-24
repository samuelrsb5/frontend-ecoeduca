import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent {

  // Dados do formulário de login
  loginData = {
    email: '',
    senha: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  // Método que será chamado ao clicar no botão de login
  onSubmitLogin(): void {
    const url = 'http://localhost:8080/alunos/login'; // URL do backend para login
  
    // Envia os dados de login para o backend
    this.http.post(url, this.loginData, { responseType: 'text' }).subscribe(
      (response: string) => {
        console.log('Resposta do Backend:', response);
        alert(response); // Exibe a resposta direta do backend
  
        // Suponha que você tenha "Login bem-sucedido" na resposta
        if (response.includes('Login bem-sucedido')) {
          this.router.navigate(['/home']); // Redireciona para a página inicial
        } else {
          alert('Erro no login. Tente novamente.');
        }
      },
      (error) => {
        console.error('Erro ao realizar login', error);
        alert('Erro ao realizar login. Tente novamente.');
      }
    );
  }
  
}
