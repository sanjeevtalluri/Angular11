import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { headerComponent } from './header.component';
import { homeComponent } from './home.component';
import { mainComponent } from './main.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    homeComponent,
    mainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [mainComponent]
})
export class AppModule { }
