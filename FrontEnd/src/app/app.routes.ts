import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'books', component: BookListComponent },
    { path: 'add-book', component: AddBookComponent },
    { path: 'borrow-book', component: BorrowBookComponent },
    { path: 'return-book', component: ReturnBookComponent },
    { path: '', redirectTo: 'books', pathMatch: 'full' }


];