import { Component, input } from '@angular/core';
import { User } from '../../Interface/store';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-usuario-card',
  imports: [RouterModule],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {
  users = input.required<User>();
}
