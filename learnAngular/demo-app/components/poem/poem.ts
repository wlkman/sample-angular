export class Poem {
    public poemLine: string;
    public nameWithAuthor: string;
    public hide: boolean;
  
    constructor(poemLine:string, nameWithAuthor:string){
      this.poemLine=poemLine;
      this.nameWithAuthor=nameWithAuthor;
      this.hide= true;
    }
  
    toggle(){
      this.hide= !this.hide;
    }
  }