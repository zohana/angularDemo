import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent  {
  text ='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ';
  
  course= {
    'title' : 'Angular Course',
    'price' : 120.30,
    'subscribers': 30133,
    'rating' : 4.987,
    'date' : new Date(2017, 8, 30)
  }
}
