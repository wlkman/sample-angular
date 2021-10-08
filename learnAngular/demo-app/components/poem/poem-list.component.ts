import {Component} from '@angular/core';
import { Poem } from './poem';

@Component({
    selector: "poem-list",
    template: `
      <poem-form (poemCreated)="addPoem($event)"></poem-form>
      <poem *ngFor="let p of poems" [poem]="p"></poem>
    `
  })
export class PoemListComponent {
    poems: Poem[];
  
    constructor() {
      this.poems= [
        new Poem(`空山不见人，但闻人语响。
        返景入深林，复照青苔上。`, "王维"),
        new Poem(`红豆生南国，春来发几枝。
        愿君多采撷，此物最相思。`, "王维"),
        new Poem(`千山鸟飞绝，万径人踪灭。
        孤舟蓑笠翁，独钓寒江雪。`, "柳宗元"),
      ]
    }
    addPoem(poem){
        this.poems.unshift(poem);
    }
}