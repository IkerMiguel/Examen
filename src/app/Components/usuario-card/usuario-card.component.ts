import { Component, input } from '@angular/core';
import { User } from '../../Interface/store';

@Component({
  selector: 'app-usuario-card',
  imports: [],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export class UsuarioCardComponent {
  users = input.required<User>();
}
