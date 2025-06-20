import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, // 👈 if your project uses standalone components
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css'],
  imports: [CommonModule, FormsModule] // 👈 add FormsModule here
})
export class ReturnBookComponent {
  bookID: number | null = null;
  borrowedBooks: number[] = [101, 102, 103];

  returnBook() {
    const index = this.borrowedBooks.indexOf(this.bookID as number);
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1);
    }
    this.bookID = null;
  }
}
