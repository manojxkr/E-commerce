import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { produc } from './../../../Model/Model';
import { HighLight } from '../../../CustomDirective/high-light';
@Component({
  selector: 'app-product',
  imports: [CommonModule, HighLight],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true,
})
export class Product {
  @Input()
  product: produc;
}
