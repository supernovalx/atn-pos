import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  products:any[];
  @Output() searchResultClick: EventEmitter<string> = new EventEmitter<string>();
  searchResult:string[];
  query:string;

  constructor(private api:ApiService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    //this.searchTerms.next(term);
    this.searchResult=this.products.filter((product)=>product.name.includes(term));
  }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data)=>this.products=data);
  }

  selectResult(product: any):void{
    this.query=product.name;
    this.searchResult=[];
    this.searchResultClick.emit(product._id);
  }
}
