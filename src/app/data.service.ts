import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }
  userData():Observable<any>{
    return this._http.get("http://localhost:3000/customers")
  }
  userTransction():Observable<any>{
    return this._http.get("http://localhost:3000/transactions")
  }
}
