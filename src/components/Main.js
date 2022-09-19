import React from 'react';
import { getBlogs } from '../services/client';
import BlogCard from './BlogCard/BlogCard';

export default function Main() {



    return (
        <main>
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </main>
    );
}