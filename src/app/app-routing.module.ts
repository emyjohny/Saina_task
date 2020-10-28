import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TandCComponent } from './tand-c/tand-c.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'privacy_policy', component: PrivacyComponent
  },
  {
    path:'terms_and_conditions', component:TandCComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
