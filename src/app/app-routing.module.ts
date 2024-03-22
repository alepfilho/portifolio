import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { HomeEnComponent } from './routes/home-en/home-en.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'en', component: HomeEnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
