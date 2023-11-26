import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from 'react-paginate';
//data
import allBlogPosts from '../../data/allBlogPosts'
//components
import ScrollBtn from "../../helpers/ScrollBtn";
import ResetLocation from "../../helpers/ResetLocation";
import BlogPosts from "./BlogPosts";

const Blog = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 5);
  const [currentBlogPosts, setcurrentBlogPosts] = useState([...allBlogPosts].reverse().slice(itemOffset, endOffset));
  const [pageCountPosts, setpageCountPosts] = useState(Math.ceil(allBlogPosts.length / 5));

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % allBlogPosts.length;
    setItemOffset(newOffset);
    ResetLocation();
  };

  useEffect(() => {
    document.title = "Blog | Pizza Time";
    setEndOffset(itemOffset + 5);
    setcurrentBlogPosts([...allBlogPosts].reverse().slice(itemOffset, endOffset));
    setpageCountPosts(Math.ceil(allBlogPosts.length / 5));

  }, [setEndOffset, endOffset, itemOffset]);
  return (
    <motion.main
      className="blog"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      <h2>Blog</h2>
      <p className="blog-intro">
      Exploring the world is better with a touch of hospitality. We're delighted to share some of our favorite travel blogs, filled with inspiring stories, destination recommendations, and travel tips. Because at Syedi Hospitality, we believe in making every journey an enriching experience. Discover the wonders of the world through our curated collection of travel blogs, crafted with a passion for exploration and a commitment to creating unforgettable memories.
      </p>
      <section className="blog-grid">
        {currentBlogPosts.map((blogPost, index) => {
          return <BlogPosts key={index} blogPost={blogPost} />;
        })}
      </section>
      <ReactPaginate
        className="pagination blog-pagination"
        breakLabel="..."
        nextLabel=" &#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCountPosts}
        previousLabel="&#60;"
        renderOnZeroPageCount={null}
      />
      <ScrollBtn />
    </motion.main>
  );
}
export default Blog;