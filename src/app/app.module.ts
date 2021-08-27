import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookAddComponent } from './components/books/book-add/book-add.component';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookUpdateComponent } from './components/books/book-update/book-update.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BookAddComponent,
    BookDetailComponent,
    BookListComponent,
    BookUpdateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
