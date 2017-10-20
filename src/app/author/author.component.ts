import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title="Authors";

  lengthOfAuthor = 0;

  authors;

  constructor(service: AuthorService) { 
     this.authors = service.getAuthor();
     this.lengthOfAuthor = this.authors.length;

  }

  ngOnInit() {
  }

}
