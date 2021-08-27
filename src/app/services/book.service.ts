import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Book} from "../book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(environment.url + '/books');
  }

  getById(id: number): Observable<any> {
    return this.http.get(environment.url + '/books/' + id);
  }

  add(book: Book): Observable<any> {
    return this.http.post(environment.url + '/books', book);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(environment.url + '/books/' + id);
  }

  update(id: number, book: Book): Observable<any> {
    return this.http.put(environment.url + '/books/' + id, book);
  }
}
