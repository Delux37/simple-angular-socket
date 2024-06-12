import {Component, HostListener} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
  public userName!: string;
  public onlineUsers$ = this.userService.getOnlineUsers();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  @HostListener('document:keydown.enter', ['$event'])
  public onEnterClick(): void {
    this.joinChat();
  }

  public joinChat(): void {
    this.userService.setUsername(this.userName);
    this.userName = '';
    this.router.navigate(['/chat'])
  }
}
