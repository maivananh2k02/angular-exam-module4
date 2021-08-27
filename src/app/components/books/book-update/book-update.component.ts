import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../services/book.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  formGroup: FormGroup | undefined;

  constructor(private fb: FormBuilder,
              private activated: ActivatedRoute,
              private location: Location,
              private router: Router,
              private bookService: BookService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.activated.snapshot.paramMap.get('id')
    this.bookService.getById(id).subscribe(res => {
      this.formGroup = this.fb.group({
        title: [res.title],
        author: [res.author],
        description: [res.description],
      })
    })
  }

  submit() {
    // @ts-ignore
    let id = +this.activated.snapshot.paramMap.get('id')
    let data = this.formGroup?.value;
    this.bookService.update(id, data).subscribe(() => {
      this.router.navigate(['books'])
    })
  }

  back() {
    this.location.back();
  }

}
