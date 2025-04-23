import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../Interface/store';
import { UsuarioCardComponent } from '../../Components/usuario-card/usuario-card.component'; 


@Component({
  selector: 'app-home',
  imports: [UsuarioCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {
  userService = inject(UsersService);
  users: User[] = [];

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((resp) => {
      this.users = resp;
      console.log(this.users);
    });
  }
}
