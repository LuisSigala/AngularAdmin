import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  public menus = [
    {
      "id": 1,
      "name": "users",

    },
    {
      "id": 2,
      "name": "customers",
    },
    {
      "id": 3,
      "name": "client",
    }
  ]

  getUsers(){
    return this.menus;
  }

}