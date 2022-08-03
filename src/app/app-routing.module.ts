import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomTestComponent } from './DomTest/dom-test/dom-test.component';
import { TestingComponent } from './Test/components/testing/testing.component';

const routes: Routes = [
  { path: '', component: TestingComponent },
  {path:'dom',component:DomTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
