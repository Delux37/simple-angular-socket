import { Routes } from '@angular/router';
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import {ChatComponent} from "./components/chat/chat.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomePageComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
