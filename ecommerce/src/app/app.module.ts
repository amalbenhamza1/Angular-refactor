import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { SingleProductComponent } from './components/pages/single-product/single-product.component';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AccountComponent } from './components/pages/account/account.component';
import { DropdownComponent } from './components/pages/dropdown/dropdown.component';
import { MainLayoutComponent } from './components/pages/main-layout/main-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/pages/cart/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/pages/search/search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    SingleProductComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    DropdownComponent,
    MainLayoutComponent,
    CartComponent,
    SearchComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products/:productId',
        component: SingleProductComponent,
      },
      {
        path: 'cart',
        component: CartComponent ,
      },
      {
         path: 'about',
       component: AboutComponent
      },

       {
         path: 'products',
       component: ProductsComponent
      },

       {
         path: 'login',
       component: LoginComponent
      },

       {
         path: 'register',
       component: RegisterComponent
      },
  ]),
    BrowserAnimationsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
