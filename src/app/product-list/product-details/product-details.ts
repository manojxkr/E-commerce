import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { produc } from '../../Model/Model';
import { ProductList2 } from '../product-list2/product-list2';
import { CommonModule } from '@angular/common';
import { SetBackground } from '../../CustomDirective/Background.directive';
import { AppHover } from '../../CustomDirective/app-hover';

@Component({
  selector: 'app-product-details',
  imports: [FormsModule,CommonModule,SetBackground,AppHover],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  product: produc;

  @Input() productListComp: ProductList2;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
