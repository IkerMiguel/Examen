import { Component, inject, input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../Interface/store';

@Component({
  selector: 'app-detalle-usuario',
  imports: [],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export default class DetalleUsuarioComponent {
  userService = inject(UsersService);
  id = input.required<string>();
  user?: User;
  
  ngOnInit(){
    this.getUser();
  }
  
  getUser(){
    this.userService.getUser(this.id()).subscribe((resp) =>{
      this.user = resp;
      console.log(this.user);
    });
  }
}
