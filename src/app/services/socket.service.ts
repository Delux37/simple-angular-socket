// socket.service.ts
import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import {fromEvent, Observable, tap} from "rxjs";
import {IMessage} from "../models/message.model";

interface CustomSocket {
  on(event: string, callback: (...args: any[]) => void): void;
  emit(event: string, ...args: any[]): void;
  // Add other methods if needed
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: any;
  private eventName = 'chat message'
  public messages$!: Observable<IMessage[]>;
  private userId!: string;

  constructor() {
    this.userId = new Date().getTime().toString();
    this.socket = io('http://localhost:3000', {
      query: { userId: this.userId }
    });

    this.messages$ = fromEvent(
      this.socket, this.eventName
    ).pipe(
      tap((o: any) => console.log(o))
    )
  }

  sendMessage(message: string, username: string) {
    this.socket.emit(this.eventName, {
      message,
      username
    });
  }

  // getMessage() {
  //   return new Observable<string>(observer => {
  //     this.socket.on('chat message', (message: string) => {
  //       observer.next(message);
  //     });
  //   });
  // }
}
