package com.gusrylmubarok.springbootbookseller.repository;

import com.gusrylmubarok.springbootbookseller.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookRepository extends JpaRepository<Book, Long>
{
}
