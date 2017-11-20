import { User } from './../user';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FeaturedUsersService {
  
  private baseUrl: string = 'http://localhost:3000/users';
  constructor(private http : Http) {
  }

  getAllUsers() {
    return this.http.get(this.baseUrl)
    .map((res:Response) => res.json());
  }

}
