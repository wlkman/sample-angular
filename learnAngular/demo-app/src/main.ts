import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { Component, NgModule } from "@angular/core";
// import { BrowserModule } from "@angular/platform-browser";
// import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import { PoemListComponent } from "components/poem/poem-list.component";
// import { PoemComponent } from "components/poem/poem.component";
// import { PoemFormComponent } from "components/poem/poem-form.components";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// @Component({
//   selector: "app",
//   template: `<poem-list></poem-list>`
// })
// class AppComponent{}

// @NgModule({
//   imports: [BrowserModule],
//   declarations: [AppComponent,PoemComponent,PoemListComponent,PoemFormComponent],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

// platformBrowserDynamic().bootstrapModule(AppModule);