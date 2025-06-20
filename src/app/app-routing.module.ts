import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // redirige '' a 'home'
  { path: 'home', component: HomeComponent },
  { path: 'animales', component: AnimalesComponent },
  { path: 'nuevo', component: AnimalFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
