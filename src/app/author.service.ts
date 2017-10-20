import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() {}
  
  getAuthor(){
    return ["Iman","Bizlee","Priyanka"];
  }

}
