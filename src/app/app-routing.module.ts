import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path:"home",component:UserDataComponent},
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"transactions",component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
