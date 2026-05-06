import React from 'react'
import BlogSection from '../sections/blog/BlogSection'
import RecentPostsSection from '../sections/blog/RecentPostsSection'
import AllPostsSection from '../sections/blog/AllPostsSection'

const Articles = () => {
  return (
    <div>
      <BlogSection />
      <RecentPostsSection />
      <AllPostsSection />
    </div>
  )
}

export default Articles


