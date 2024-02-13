import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'http://localhost:5210/v1/Products';

  constructor(private http: HttpClient) { }

  data: any;

  getProducts(): Observable<Product[]> {
    this.data = this.http.get<Product[]>(this.url);
    return this.data;
  }

  getProductById(id: number): Observable<Product> {
    this.data = this.http.get<Product>(`${this.url}/${id}`);
    return this.data;
  }

  putProductQnt(id: number, requested: number): any {
    this.http.put(`${this.url}/${id}`, requested)
  }
}
