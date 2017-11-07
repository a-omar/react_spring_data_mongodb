package com.demo.timeline.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;

import java.util.Date;

@Document(collection = "message")
@Data
public class Message {
    private @Id Long id;

    @Indexed(unique = true)
    private String title;
    private String msgBody;
    private Date pubDate;

//    private Message(){}
//
//    public Message(String title, String msgBody, Date pubData) {
//        this.title = title;
//        this.msgBody = msgBody;
//        this.pubData = pubData;
//    }

}