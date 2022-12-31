import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './public/components/Home-Component/home.component';

const routes: Routes = [{
  path: 'home',
  // component: HomeComponent
  loadChildren:()=> import('./public/components/Home-Component/home.module').then(m=>m.HomeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
