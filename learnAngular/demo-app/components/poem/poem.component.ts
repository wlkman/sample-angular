import {Component, Input} from '@angular/core';
import { Poem } from './poem';

@Component({
    selector: "poem",
    template: `<div class="card card-block">
    <h4 class="card-title">{{data.poemLine}}</h4>
    <p class="card-text" [hidden]="data.hide">{{data.nameWithAuthor}}</p>
    <a class="btn btn-warning" (click)="data.toggle()">Author</a>
    </div>`
})
export class PoemComponent {
    @Input("poem") data: Poem;
}