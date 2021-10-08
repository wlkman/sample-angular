import {Component, Output, EventEmitter} from '@angular/core';
import { Poem } from './poem';

@Component({
    selector: "poem-form",
    template: `
      <div class="card card-block">
        <h4 class="card-title">create poem</h4>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="pls enter poem" #poemLine/>
        </div>
        <div class="form-group">
            <input
                type="text"
                class="form-control"
                placeholder="please enter author"
                #nameWithAuthor/>
        </div>
        <button type="button" class="btn btn-primary" (click)="createPoem(poemLine.value,nameWithAuthor.value)">create</button>
      </div>
    `
  })
export class PoemFormComponent {
    @Output() poemCreated= new EventEmitter<Poem>();

    createPoem(poemLine:string,nameWithAuthor:string){
        this.poemCreated.emit(new Poem(poemLine, nameWithAuthor));
    }
}