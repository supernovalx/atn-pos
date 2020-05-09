import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { ApiService } from './api.service';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { TransactionsStatisticComponent } from './transactions-statistic/transactions-statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    LandingComponent,
    TransactionListComponent,
    TransactionDetailsComponent,
    NewTransactionComponent,
    ProductSearchComponent,
    ShopListComponent,
    ShopDetailsComponent,
    TransactionsStatisticComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:LandingComponent},
      {path:'transactions',component:TransactionListComponent},
      {path:'login',component:LoginComponent},
      {path:'transactions/:id',component:TransactionDetailsComponent},
      {path:'new-transactions',component:NewTransactionComponent},
      {path:'shops',component:ShopListComponent},
      {path:'shops/:id',component:ShopDetailsComponent},
      {path:'transactions-stats',component:TransactionsStatisticComponent},



    ])
  ],
  providers: [AuthenticationService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
