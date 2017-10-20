import { Component } from '@angular/core';
import { newValueArgs } from "./favourite/favourite.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post={
    isClicked : true
  }

  tweet={
    isLiked: false,
    likesCount: 11
  }

  onChange(eventArgs: newValueArgs){
    console.log("Favourite:  " + eventArgs.newValue);
  }
}
