import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpServiceService {

  http = inject(HttpClient);
  apiUrl = environment.API_URL;
}
