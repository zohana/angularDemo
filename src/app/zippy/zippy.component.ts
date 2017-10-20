import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {
  @Input('title') title;
  active:boolean = false;

  onClickPanelHeader(){
    this.active = !this.active;
  }

}
