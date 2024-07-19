import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{
  userId:any
  name:any
  searchTerm:string=""
  alltrans:any[]=[]
  userTrans:any[]=[]
 constructor(private data:DataService , private route:ActivatedRoute){}
ngOnInit(): void {
  this.route.queryParams.subscribe(params=>{
    this.userId=params['id']
    this.name=params['name']
  })
this.data.userTransction().subscribe({
  next:(response)=>{
    this.alltrans=response
for(let i=0;i<this.alltrans.length;i+=1){
 if(this.alltrans[i].customer_id==this.userId){
   this.userTrans.push(this.alltrans[i])
 }  
}
  }
})
 

}

}
