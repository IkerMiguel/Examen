import { Injectable } from '@angular/core';
import { User } from '../Interface/store';
import { Observable } from 'rxjs';
import { BaseHttpServiceService } from './base-http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseHttpServiceService{

  getUsers():Observable<any>{
    return this.http.get<User[]>(`${this.apiUrl}/users`); 
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }
}
