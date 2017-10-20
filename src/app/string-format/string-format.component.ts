import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'string-format',
  templateUrl: './string-format.component.html',
  styleUrls: ['./string-format.component.css']
})
export class StringFormatComponent {

  nameOfTheMovie: string;
  valueOfTextBox: string;

  onKeyUp(nameOfTheMovie){
    this.valueOfTextBox = this.nameOfTheMovie;
  }
  

}
