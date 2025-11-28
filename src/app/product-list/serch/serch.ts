import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serch',
  imports: [FormsModule, CommonModule],
  templateUrl: './serch.html',
  styleUrl: './serch.css',
})
export class Serch {
  searchText: string = '';

  @Output()
  serchtextChanged: EventEmitter<string> = new EventEmitter<string>();
  // onSerchChanged() {
  //   this.serchtextChanged.emit(this.searchText);
  // }
  @ViewChild('serchInput') serchInputE1!: ElementRef;

  updateSerchText() {
    // console.log(inputELI.value);
    this.searchText =this.serchInputE1.nativeElement.value;
    this.serchtextChanged.emit(this.searchText);
  }
}
