import { Injectable } from '@angular/core';
import { credential } from '../Constants/credential';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  private apiUrl = `${credential.BASE_URL}todos`


  getTodoList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
