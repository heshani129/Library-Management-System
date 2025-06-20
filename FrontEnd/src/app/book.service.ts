import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Book {
    title: string;
    author: string;
    price: number;
    available: boolean;
    pubID: number;
}

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private apiUrl = 'http://localhost:8080/books';

    constructor(private http: HttpClient) { }

    // private books: Book[] = [
    //     { title: 'Harry Potter', author: 'J.K. Rowling', price: 1200, available: true, pubID: 1 },
    //     { title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 1500, available: false, pubID: 2 },
    //     { title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', price: 1000, available: true, pubID: 3 }
    // ];

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.apiUrl);
    }

    addBook(book: Book) {
        //this.books.push(book);
    }
}
