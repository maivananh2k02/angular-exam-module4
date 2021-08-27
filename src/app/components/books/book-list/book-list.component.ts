import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";
import {Book} from "../../../book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAll().subscribe(res => {
      this.books = res;
      console.log(res)
    })
  }

  delete(id: any) {
    if (confirm('Are you sure ?')) {
      this.bookService.delete(id).subscribe(() => {
        this.getAllBooks();
      })
    }
  }

}
