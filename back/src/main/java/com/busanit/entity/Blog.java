package com.busanit.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="blog")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Blog extends BaseEntity{
    @Id
    @Column(name="idx")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idx;

    @Column(nullable = false)
    private String title;

    private String content;

    @OneToMany(mappedBy = "blog", cascade = CascadeType.REMOVE)
    private List<BlogReply> blogReplyList;
}
