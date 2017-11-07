package com.demo.timeline.models;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface MessageRepository extends MongoRepository<Message,Long>{

    @Override
    @Query("{id:'?0'}")
    Message findOne(Long id);

    @Override
    Page<Message> findAll(Pageable pageable);

}
