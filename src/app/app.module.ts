import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortifolioComponent } from './portifolio/portifolio.component';

@NgModule({
  declarations: [
    AppComponent,
    PortifolioComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, PortifolioComponent]
})
export class AppModule { }
