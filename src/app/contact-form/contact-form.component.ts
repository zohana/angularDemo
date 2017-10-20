import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  selectMethods=[
    { id:1 , name:'Email' },
    { id:2 , name: 'Phone' }
  ]

  paymentMethod=[
    {id:1, name:'Credit Card'},
    {id:2, name:'Debit Interact'},
  ]

  log(x){
    console.log('hello');   
  }

  submit(y){
    console.log(y.value);
  }
  

}
