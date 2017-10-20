import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

//likesCount: number = 11;
@Input('isLiked') isLiked: boolean = false;
@Input('likesCount') likesCount :number = 11;

onClickOfHeart(){
  this.isLiked = !this.isLiked;
  this.likesCount = this.isLiked ? this.likesCount+1 : this.likesCount-1;
  
  //console.log(this.isLiked);
  
  
}


}
