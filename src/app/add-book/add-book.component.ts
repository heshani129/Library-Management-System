import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Book, BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  title: string = '';
  author: string = '';
  price: number = 0;
  available: boolean = false;
  pubID: number = 0;

  constructor(private bookService: BookService, private router: Router) { }

  addBook() {
    const newBook: Book = {
      title: this.title,
      author: this.author,
      price: this.price,
      available: this.available,
      pubID: this.pubID
    };

    this.bookService.addBook(newBook);

    // After adding, navigate back to book list
    this.router.navigate(['/books']);
  }
}