import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Book, BookService } from '../book.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-book-list',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']

})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  goToAddBook() {
    this.router.navigate(['/add-book']);
  }
  borrowBook() {
    this.router.navigate(['/borrow-book']);
  }
  returnBook() {
    this.router.navigate(['/return-book']);
  }


}
