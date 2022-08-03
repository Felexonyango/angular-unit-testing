import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './components/testing/testing.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [TestingComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpClient]

})
export class TestingModule { }
