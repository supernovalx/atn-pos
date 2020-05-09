import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenPayload, AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,private auth: AuthenticationService) { }
  apiUrl='/api/';

  public getAllTransactions(): Observable<any> {
    let base;

    base = this.http.get(`${this.apiUrl}/transactions`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});

    const request = base.pipe(
      map((data: any) => {
        return data;
      })
    );

    return request;
  }

  public getTransactionsByUserIds(id:string): Observable<any> {
    let base;

    base = this.http.get(`${this.apiUrl}users/${id}/transactions`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});

    const request = base.pipe(
      map((data: any) => {
        return data;
      })
    );

    return request;
  }

  public getProducts(): Observable<any> {
    let base;

    base = this.http.get(`${this.apiUrl}products`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});

    const request = base.pipe(
      map((data: any) => {
        return data;
      })
    );

    return request;
  }

  public getProductById(id:String): Observable<any> {
    let base;

    base = this.http.get(`${this.apiUrl}products/${id}`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});

    const request = base.pipe(
      map((data: any) => {
        return data;
      })
    );

    return request;
  }

  public getTransactionById(id:String): Observable<any> {
    let base;

    base = this.http.get(`${this.apiUrl}transactions/${id}`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});

    const request = base.pipe(
      map((data: any) => {
        return data;
      })
    );

    return request;
  }

  public postTransaction(transaction:any): Observable<any> {
    let base;

    base = this.http.post(`${this.apiUrl}transactions`, transaction);

    const request = base.pipe(
      map((data: any) => {
        return data;
      })
    );

    return request;
  }

  public getUserById(id:String): Observable<any> {
    let base;

    base = this.http.get(`${this.apiUrl}users/${id}`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});

    const request = base.pipe(
      map((data: any) => {
        return data;
      })
    );

    return request;
  }

  public getUsers(): Observable<any> {
    let base;

    base = this.http.get(`${this.apiUrl}users`, { headers: { Authorization: `Bearer ${this.auth.getToken()}` }});

    const request = base.pipe(
      map((data: any) => {
        return data;
      })
    );

    return request;
  }
}
