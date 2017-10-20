import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatString'
})
export class FormatStringPipe implements PipeTransform {

  transform(nameOfTheMovie: string){
    if(!nameOfTheMovie) return null;

    
    let words = nameOfTheMovie.split(' ');
    //

    for(var i=0; i<words.length;i++){
      let word = words[i];
      if(i>0 && this.isPrepositions(words[i])){
        words[i] = word.toLowerCase();
      }else{
        words[i] = this.toTitleCase(word);
      }
    }
    return words.join(' ');
  }

  private toTitleCase(word: string):string{
    
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase()
  }

  private isPrepositions(words: string):boolean{
    let prepositions=['of','the','are','or'];

    return prepositions.includes(words.toLowerCase());
  }


}
