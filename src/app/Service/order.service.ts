import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db:AngularFireDatabase,private http:HttpClient) { }

  storeOrder(order){
  return this.http.post('https://obv53599.pythonanywhere.com/order',order);
  }
  showbeneficiaryOrder(){
    return this.http.get('https://obv53599.pythonanywhere.com/beneficiary/orders');
  }
  notification(){
    return this.http.get('https://obv53599.pythonanywhere.com/donor/orders');
  }
  //donor/orders
  
}


