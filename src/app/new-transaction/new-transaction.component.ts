import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
  products=[];
  query:String;
  totalValue=0;
  constructor(public api:ApiService,public auth:AuthenticationService,private router: Router) {
   }

  ngOnInit(): void {
  }

  onSearchResultClick(product:string){
    console.log(product);
    this.api.getProductById(product).subscribe(p=>{
      p.quantity=1;
      this.products.push(p);
      this.calcTotal();
    });
  }

  calcTotal():void{
    console.log(1);
    this.totalValue=0;
    this.products.forEach(p=>
      {
          this.totalValue+=p.price*p.quantity;
      });
  }

  createTransaction():void{
    let transaction={
      createdAt:Date.now(),
      userId:this.auth.getUserDetails()._id,
      productIds:this.products.map(function t(p)
        {
          return {id:p._id,
          quantity:p.quantity};
        })
    }
    console.log(transaction);
    this.api.postTransaction(transaction).subscribe(id=>this.router.navigateByUrl('/transactions/'+id));
  }

}
