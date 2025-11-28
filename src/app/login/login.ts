import { Component } from '@angular/core';
import { TopMenu } from './top-menu/top-menu';
import { MainMenu } from './main-menu/main-menu';

@Component({
  selector: 'app-login',
  imports: [TopMenu,MainMenu],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
