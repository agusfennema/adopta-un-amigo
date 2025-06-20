import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './components/home/home.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'animales', component: AnimalesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeComponent,       // Importa el componente standalone
    AnimalesComponent,   // Importa el componente standalone
    AnimalFormComponent, // Importa el componente standalone
  ],
  bootstrap: [/* probablemente AppComponent */]
})
export class AppModule {}
