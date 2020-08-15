import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from "src/app/products/products.component";
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [{
  path: "products",
  component: ProductsComponent

},
{
  path: "main",
  component: MainPageComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
