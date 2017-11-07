package com.demo.timeline.models;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;


public interface MovieRepository extends MongoRepository<Movie,String>{

    @Override
//    @Query("{id:'?'}")
    Movie findOne(String id);

    @Override
    Page<Movie> findAll(@PageableDefault(page = 0, value = 2) Pageable pageable);

}