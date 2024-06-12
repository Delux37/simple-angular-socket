import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SocketService} from "../../services/socket.service";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {IMessage} from "../../models/message.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  public newMessage!: string;
  public messages$: Observable<IMessage[]> = this.socketService.messages$;

  constructor(
    private socketService: SocketService,
    private userService: UserService,
    router: Router
  ) {
    if(!this.userService.getCurrentUserUsername()) {
      router.navigate(['/'])
    }
  }

  public sendMessage(): void {
    const username = this.userService.getCurrentUserUsername();
    this.socketService.sendMessage(
      this.newMessage,
      username
    )
    this.newMessage = '';
  }
}
