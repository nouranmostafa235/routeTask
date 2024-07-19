import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  userData:any
  userTransactions:any
  searchTerm:string=""
 constructor(private data:DataService , private router: Router){}
ngOnInit(): void {
  this.data.userData().subscribe({
    next:(response)=>{
      this.userData=response 
    }
  })
}
takeId(id:any,name:any){
  this.router.navigate(['/transactions'],{queryParams:{id:id,name:name}})
}
}
