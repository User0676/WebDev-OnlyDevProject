import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { FiltersComponent } from './filters/filters.component'
import { SearchComponent } from './search/search.component'
import { FoodItemComponent } from './food-item/food-item.component'
import { RouterLink } from '@angular/router'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    HomeComponent,
    FiltersComponent,
    SearchComponent,
    FoodItemComponent,
  ],
  imports: [CommonModule, RouterLink, FormsModule],
})
export class HomeModule {}
