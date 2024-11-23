import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-tela-login',
    templateUrl: './tela-login.component.html',
    styleUrls: ['./tela-login.component.css'],
    standalone: false
})
export class TelaLoginComponent {
  // Objeto user que conterá os dados do formulário
  user = {
    nome: '',        // Nome do usuário
    idade: null,     // Idade do usuário
    email: '',       // Email do usuário
    senha: '',    // Senha do usuário
    responsavel: {   // Responsável do usuário (com ID)
      id: null       // ID do responsável
    },
    responsaveis: {
      id: null
    }
  };

  constructor(private http: HttpClient) {}

  // Método que envia os dados para o backend
  onSubmit(): void {
    const url = 'http://localhost:8080/alunos'; // URL do backend

    // Estrutura o objeto `user` de forma que ele corresponda à estrutura esperada pelo backend
    const usuario = {
      nome: this.user.nome,
      idade: this.user.idade,
      email: this.user.email,
      senha: this.user.senha,
      responsavel: {
        id: this.user.responsavel.id
      },
      responsaveis: {
        id: this.user.responsaveis.id
      }
    };
  
    // Envia os dados para o backend via POST
    this.http.post(url, usuario).subscribe(response => {
      console.log('Usuário cadastrado com sucesso', response);
    }, error => {
      console.error('Erro ao cadastrar usuário', error);
    });
  }
}
