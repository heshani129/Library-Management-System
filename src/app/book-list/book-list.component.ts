import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Book, BookService } from '../book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./book-list.component.css']

})
export class BookListComponent {
  books: Book[];

  constructor(private bookService: BookService, private router: Router) {
    this.books = this.bookService.getBooks();
  }

  goToAddBook() {
    this.router.navigate(['/add-book']);
  }


}
