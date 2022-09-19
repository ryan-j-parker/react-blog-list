import React from 'react';
import './BlogCard.css';
import getBlogs from '../../services/client.js';
import { useState, useEffect } from 'react';

export default function BlogCard({ title, subtitle, text, image }) {
  const [posts, setPosts] = useState([]);
  
  return (
    <div className="blog-card">
      <div className="details">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className="text">{text}</div>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
}
