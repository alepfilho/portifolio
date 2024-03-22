import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CardComponent } from './card/card.component';
import { HomeEnComponent } from './routes/home-en/home-en.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeEnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionComponent,
    CardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
