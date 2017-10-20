import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent  {
  @Input('isFavourite') isClicked: boolean = true;
  @Output() change = new EventEmitter();

  onClicked(){
      this.isClicked=!this.isClicked;
      //console.log(this.isClicked);
      this.change.emit({ newValue : this.isClicked });
      
  }

}

export interface newValueArgs{ 
  newValue: boolean
};
