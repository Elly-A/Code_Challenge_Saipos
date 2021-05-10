import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupervisorCheckService {

  constructor(
    private http: HttpClient
  ) { }

  validate(password: string): boolean {
    // password in backend will be encrypted
    return password === 'TrabalheNaSaipos';
  }
}
