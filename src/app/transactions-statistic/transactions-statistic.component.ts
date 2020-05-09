import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-transactions-statistic',
  templateUrl: './transactions-statistic.component.html',
  styleUrls: ['./transactions-statistic.component.css']
})
export class TransactionsStatisticComponent implements OnInit {
  transactions:any;
  constructor(public api:ApiService,private route: ActivatedRoute,private auth:AuthenticationService) { 
    this.api.getAllTransactions().subscribe((data)=>{
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
