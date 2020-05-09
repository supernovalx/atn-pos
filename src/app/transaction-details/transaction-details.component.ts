import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  private sub: any;
  id: String;
  transaction:any;
  totalValue=0;
  constructor(private route: ActivatedRoute,public api:ApiService) { 
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      api.getTransactionById(this.id).subscribe(data=>
        {
          this.transaction=data;
          this.totalValue=0;
          data.productIds.forEach(product => {
            this.totalValue+=product.id.price*product.quantity;
          });
        }
        );
      // In a real app: dispatch action to load the details here.
   });
  }

  ngOnInit(): void {
    this.sub.unsubscribe();
  }

}
