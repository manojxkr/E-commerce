import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TopHeader } from './top-header/top-header';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Login, FormsModule, CommonModule, TopHeader, ProductList],
  templateUrl: './app.html',

  styleUrls: ['./app.css'],
})
export class App {
  title = 'my-app';
  imageUrl = 'https://picsum.photos/200';

  count = 0;
  incease() {
    this.count++;
  }
  name = '';

  input = '';
  output = '';
  typeText() {
    this.output = this.input;
  }
  isVisible = true;

  fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

  color = 'green';

  fruit = ['Apple', 'Banana', 'Mango', 'Orange', 'papaya'];

  show = true;
  button = true;

  showFruits() {
    this.show = true;
  }
  hideFruits() {
    this.show = false;
  }
  addfruit() {
    this.fruit.push('grapes');
  }
  clearFruits() {
    this.fruit = [];
  }
  addnewFruit() {
    this.fruit.push(this.newFruit);
  }
  newFruit: string = '';

  remove(index: number) {
    this.fruit.splice(index, 1);
  }

  today = new Date();
  price = 499;
  player = {
    name: 'Rohit Sharma',
    runs: 121,
  };
  text: string = '';
  price1: number = 120;
  todayDate = new Date();
}
