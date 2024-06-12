import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username!: string;

  constructor(private http: HttpClient) { }

  public getOnlineUsers(): Observable<number> {
    return this.http.get<number>('http://localhost:3000/online-users')
  }

  public setUsername(username: string): void {
    this.username = username;
  }

  public getCurrentUserUsername(): string {
    return this.username;
  }
}
