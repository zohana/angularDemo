import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  title="Binding";
  imagePath="http://lorempixel.com/400/200/";
  imageName="imagename";
  btnText = "Active";
  isActive= true;
  isClicked=true;
  btnTwoText ="Clicked";
  click=true;
  email= "me@yahoo.com";
  textBox=""

  onClick(){
    this.isActive=!this.isActive;
    console.log(this.isActive);
    this.btnText = this.btnText == "Active" ? "In Active":"Active";   
  }

  onClickButtonTwo(){
    this.isClicked=!this.isClicked;
    console.log(this.isClicked);  
    this.btnTwoText = this.btnTwoText == "Clicked" ? "Click Me" : "Clicked";

  }

  onKeyUp(email){
    this.textBox = this.email;
    
  }
}
