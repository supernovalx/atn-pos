import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  users=[];
  constructor(private api:ApiService) { 
    this.api.getUsers().subscribe((data)=>{
      this.users=data;
      });
  }

  ngOnInit(): void {
  }

}
