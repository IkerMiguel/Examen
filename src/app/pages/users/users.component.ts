import { Component, inject } from '@angular/core';
import { Card2Component } from '../../components/card2/card2.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  imports: [Card2Component],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {

  users:any = [];
  usersService = inject(UsersService);
    
    ngOnInit() {
      this.usersService.getUsers().then((data) => {
        this.users = data;
      });
    }

}
