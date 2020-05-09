import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions:any;
  constructor(public api:ApiService,private route: ActivatedRoute,private auth:AuthenticationService) { 
    this.api.getTransactionsByUserIds(auth.getUserDetails()._id).subscribe((data)=>{
      this.transactions=data;
      this.transactions.forEach(transaction => {
        api.getUserById(transaction.userId).subscribe((data)=>{
          transaction.userName=data.userName;
          console.log(data);
        });
      });
      console.log(data);
    });
  }

  
  ngOnInit(): void {
    console.log("init transactions");
    
  }

}
