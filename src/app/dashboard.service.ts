import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './common/user';

@Injectable()
export class DashboardService {

    constructor(private httpClient: HttpClient) { }

    getTeamMembersSummary(): Observable<User[]> {
      return this.httpClient.get<User[]>("http://localhost:8080/api/users");
    }

    insertUser(newUser: User): Observable<User> {
      return this.httpClient.post<User>("http://localhost:8080/api/user", newUser);
    } 
  

}
