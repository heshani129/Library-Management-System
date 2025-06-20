import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,                     // ✅ this is a standalone component
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css'],
  imports: [CommonModule, FormsModule]  // ✅ add FormsModule here
})
export class BorrowBookComponent {
  bookID: number | null = null;
  borrowedBooks: number[] = [];

  borrowBook() {
    if (this.bookID !== null && !this.borrowedBooks.includes(this.bookID)) {
      this.borrowedBooks.push(this.bookID);
      this.bookID = null;
    }
  }
}
