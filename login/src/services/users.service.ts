import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../app/models/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiurl = 'https://localhost:7047/api';
  url = 'users';

  constructor(private http: HttpClient) { }

  //Executing SQL RAW CRUD using Entity Framework API
  //Consuming the user's email address that is passed using sessionStorage
  //Using the email address I am querying my SQL DB to obtain the user's role, ie SuperAdmin, Admin, User, etc
  //I would like to store this returned information either with sessionStorage but I would prefere to use a Service (not shown) to pass the variable
  public getUsers() : Observable<user[]> {       
    let userEmail = sessionStorage.getItem('userEmail');
    return this.http.get<user[]>(`${this.apiurl}/${this.url}/${userEmail}`).pipe(
    tap((res:any)=>{
       sessionStorage.setItem('userRole', res.role);
       })
       );
  }

  //I can display the results of user in my HTML, but I can not figure out how to store the data returned to use later is this file

}
