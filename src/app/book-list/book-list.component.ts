import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./book-list.component.css']

})
export class BookListComponent {
  books: string[] = ['DBMS Fundamentals', 'Modern Java', 'Web Development'];
  showAddBook = false;

  constructor(private router: Router) { }

  goToAddBook() {
    this.router.navigate(['/add-book']);
  }


}
