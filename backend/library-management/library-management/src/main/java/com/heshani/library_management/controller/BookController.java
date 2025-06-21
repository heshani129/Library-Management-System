package com.heshani.library_management.controller;

import com.heshani.library_management.model.Book;
import com.heshani.library_management.repository.BookRepository;
import org.springframework.web.bind.annotation.*;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular frontend
@RequestMapping("/books")
public class BookController {

    private final BookRepository bookRepository;
    @PersistenceContext
    private EntityManager entityManager;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Book> getAllBooks() {
        //return bookRepository.findAll();
        String sql = "SELECT * FROM Book";
        return entityManager.createNativeQuery(sql, Book.class).getResultList();
    }
}
