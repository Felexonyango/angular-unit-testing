import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingModule } from './Test/testing.module';
import { DomModule } from './DomTest/dom.module';

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestingModule,
    DomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
