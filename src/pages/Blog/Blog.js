import React from 'react'
import { BlogCard } from '../../components/blog-card/BlogCard'
import './blog.css'
import iconTarget from '../../assets/icons/icon-target.png'

export default function Blog() {
  return (
    <div className='blog_main'>
      <div className='blog_top'>
        <img src={iconTarget} alt='icon-target' className='blog_icon'/>
        <h2 className='blog_company'><span>Check our News</span> BLOG</h2>
      </div>
      <div className='blog_bottom'>
        <p>Keep updated with last industry solutions.</p>
      </div>
      {/* <div className='blog_paginator'>
        <p>BLOG PAGINATOR HERE</p>
      </div> */}
      <div className='blog_cards'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  )
}
