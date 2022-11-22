import { BookspageComponent } from './bookspage/bookspage.component';//路由的import
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'books',component:BookspageComponent}
];//路由設定

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
