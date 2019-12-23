import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersModule } from '../models/users/users.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private REST_API_SERVER = "https://jsonplaceholder.typicode.com/users";
  constructor(private httpClient: HttpClient) { }

  public getUsers(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
