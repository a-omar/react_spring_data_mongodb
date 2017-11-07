package com.demo.timeline.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "movies")
@Data
public class Movie {

    private @Id String _id;
    private String actor_id;
    private String title;

}
