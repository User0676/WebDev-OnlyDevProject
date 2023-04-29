import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { LayoutModule } from './components/ui/layout/layout.module'
import { HeaderModule } from './components/ui/layout/header/header.module'
import { AppRoutingModule } from './app-routing.module'
import { SaleComponent } from './components/screens/sale/sale.component'
import { FavoritesComponent } from './components/screens/favorites/favorites.component'
import { ProfileComponent } from './components/screens/profile/profile.component'
import { HttpClientModule } from '@angular/common/http'
import { HomeModule } from './components/screens/home/home.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    FavoritesComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    HeaderModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
