import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {
  transactions=[];
  shopName:string;
  constructor(public api:ApiService,private route:ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.api.getUserById(params.id).subscribe(u=>
        {
          this.shopName=u.userName;
          this.api.getTransactionsByUserIds(params.id).subscribe((data)=>{
            this.transactions=data;
            this.transactions.forEach(transaction => {
                transaction.userName=this.shopName;
                console.log(data);
              });
          });
        })
   });
    
   }

  ngOnInit(): void {
  }

}
