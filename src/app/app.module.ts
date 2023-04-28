import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { LayoutModule } from './components/ui/layout/layout.module'
import { HeaderModule } from './components/ui/layout/header/header.module'
import { AppRoutingModule } from './app-routing.module'
import { SaleComponent } from './components/screens/sale/sale.component'
import { FavoritesComponent } from './components/screens/favorites/favorites.component'
import { ProfileComponent } from './components/screens/profile/profile.component'
import { ProductComponent } from './components/screens/product/product.component'
import { FoodItemComponent } from './components/screens/home/food-item/food-item.component'

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    FavoritesComponent,
    ProfileComponent,
    ProductComponent,
    FoodItemComponent,
  ],
  imports: [BrowserModule, LayoutModule, HeaderModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
