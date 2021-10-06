// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
@Component({
  selector: "poem",//<poem></poem>
  template: `
  <h1>{{poemLine}}</h1>
  <p>{{nameWithAuthor}}</p>
  `
})
class PoemComponent {
  poemLine: string;
  nameWithAuthor: string;

  constructor() {
    this.poemLine= "Hello World！";
    this.nameWithAuthor= "Adrian";
  }
}


interface Poem {
  poemLine: string,
  nameWithAuthor: string
}

@Component({
  selector: "poem-list",
  template: `
    <div class="card card-block" *ngFor="let poem of poems">
      <h4 class="card-title">{{poem.poemLine}}</h4>
      <p class="card-text">{{poem.nameWithAuthor}}</p>
    </div>
  `
})
class PoemListComponent {
  poems: Array<Poem>;

  constructor() {
    this.poems= [
      {
        poemLine: `空山不见人，但闻人语响。
        返景入深林，复照青苔上。`,
        nameWithAuthor: "王维"
      },
      {
        poemLine: `红豆生南国，春来发几枝。
        愿君多采撷，此物最相思。`,
        nameWithAuthor: "王维"
      },
      {
        poemLine: `千山鸟飞绝，万径人踪灭。
        孤舟蓑笠翁，独钓寒江雪。`,
        nameWithAuthor: "柳宗元"
      },
    ]
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [PoemComponent,PoemListComponent],
  bootstrap: [PoemListComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);