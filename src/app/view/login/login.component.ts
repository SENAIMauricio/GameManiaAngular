import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  userModel = new User()
  mensagem = ""

  receberDados() {

    console.log(this.userModel);
    
    this.userService.validarLogin(this.userModel).subscribe({
      next: (sucesso) => {
        console.log('deu certo');
        console.log(sucesso);
        this.mensagem = 'Logado com sucesso'
      },
      error: (erro) => {
        console.log('deu erro');
        console.log(erro);
        this.mensagem = 'Senha ou e-mail inválido'
      }
    })

  }

  
}
