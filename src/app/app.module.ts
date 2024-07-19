import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionComponent } from './transaction/transaction.component';
import { SearchNamesPipe } from './search-names.pipe';
import { SearchAmountPipe } from './search-amount.pipe';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    TransactionComponent,
    SearchNamesPipe,
    SearchAmountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BaseChartDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
