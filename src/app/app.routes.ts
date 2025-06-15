import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'books', component: BookListComponent },
    { path: 'add-book', component: AddBookComponent },
    { path: '', redirectTo: 'books', pathMatch: 'full' }


];