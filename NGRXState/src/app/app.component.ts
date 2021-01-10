
import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:Observable<Product[]>;

  constructor(public store:Store<AppState>){

    this.products=this.store.select(state=>state.products);
  }
   addProducts(name,price){
    this.store.dispatch({
      type:'Add_Product',
      payload:<Product>{
        name:name,
        price:price
      }
    })
  };
  
}
