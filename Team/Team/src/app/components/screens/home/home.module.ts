import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    FiltersComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
