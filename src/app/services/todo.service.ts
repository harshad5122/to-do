import { Injectable } from '@angular/core';
import { credential } from '../Constants/credential';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = `${credential.BASE_URL}todos`

  constructor(private http: HttpClient) { }

  getTodoList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
