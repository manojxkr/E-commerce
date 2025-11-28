import { Component, ViewChild } from '@angular/core';
import { Serch } from './serch/serch';
import { ProductList2 } from './product-list2/product-list2';
import { ProductDetails } from './product-details/product-details';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [Serch,ProductList2,ProductDetails,FormsModule,CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  //  name ="manoj";
  // product = {
  //   name: 'iPhone X',
  //   price: 789,
  //   color: 'Black',
  //   discount: 8.5,
  //   inStock: 10,
  //   // pImage: '/assets/images/iphone.png'
  // };
  // addToCart: number = 0;
  // discountedPrice() {
  //   return this.product.price - (this.product.price * this.product.discount) / 100;
  // }
  // onChange(event: any) {
  //   // this.name=event.target.value
  //   console.log(event.target.value);
  // }
  // increment() {
  //   if (this.addToCart < this.product.inStock) {
  //     this.addToCart++;
  //   }
  // }
  // decrement() {
  //   if (this.addToCart > 0) {
  //     this.addToCart--;
  //   }
  // }
  @ViewChild(ProductList2)ProductListComponent:ProductList2
  serchtext :string=''
  setSerchtext(value :string)
  {
    this.serchtext=value;
    console.log(value);
    

  }
}
