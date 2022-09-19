import React from 'react';
import { useBlogs } from '../hooks/useBlogs.js';
import BlogCard from './BlogCard/BlogCard.js';

export default function Main() {
  const blogs = useBlogs();

  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} title={blog.title} subtitle={blog.subtitle} text={blog.text} image={blog.image} />
      ))}
    </main>
  );
}