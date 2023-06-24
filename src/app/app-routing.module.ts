import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ConfirmComponent } from './page/confirm/confirm.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'confirm',component:ConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
