import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'main-menu',
  imports: [CommonModule],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.css',
})
export class MainMenu {
  main: string[] = ['home', 'sale', 'contact', 'arrival','new'];
}
