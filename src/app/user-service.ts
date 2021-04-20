import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
const URL ='http://localhost:8080/user/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  searchByName(name:string){
    return this.http.get(URL+name);
  }
  save(user: User) {
    return this.http.post(URL, user, {
      headers: { "content-type": 'application/json' }
    });
  }
  getAllUsers(){
    return this.http.get(URL);
  }
  delete(userid:number  ){
    return this.http.delete(URL+userid);
  }
}
