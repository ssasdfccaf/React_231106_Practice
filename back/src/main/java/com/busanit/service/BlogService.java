package com.busanit.service;

import com.busanit.domain.BlogDTO;
import com.busanit.entity.Blog;
import com.busanit.repository.BlogRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class BlogService {

    private BlogRepository blogRepository;

    public List<Blog> getBlogList() {
        return blogRepository.findAll();
    }

    public List<Blog> getBlogSearchList(String searchText) {
        return blogRepository.findByTitleContaining(searchText);
    }

    public Blog getBlog(Long idx) {
        return blogRepository.findByIdx(idx);
    }

    public void writeBlog(BlogDTO blogDTO) {
        Blog blog = new Blog();
        if(blogDTO.getIdx() != null) {
            blog.setIdx(blogDTO.getIdx());
        }
        blog.setTitle(blogDTO.getTitle());
        blog.setContent(blogDTO.getContent());

        blogRepository.save(blog);
    }

    public void removeBlog(Long idx) {
        blogRepository.deleteById(idx);
    }
}
