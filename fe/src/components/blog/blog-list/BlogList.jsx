import React, { useEffect, useState } from "react";
import BlogItem from "../blog-item/BlogItem"
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { nanoid } from "nanoid";
import ResponsivePagination from 'react-responsive-pagination'
import { useSelector } from "react-redux";

const BlogList = () => {

  const search = useSelector((state) => state.post.searchData)
  console.log(search);

  const [currentPage, setCurrentPage] = useState(1)
  const [posts, setPosts] = useState()

  const getBlogPosts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/blogPost/`)
      setPosts(response.data.post)
    } catch (error) {
      console.log(error);
    }
  }

  const handlePagination = (value) => {
    setCurrentPage(value)
  }

  useEffect(() => {
    getBlogPosts()

  }, [currentPage])
  

  return (
    <>
      <Container>
        <Row>
          {posts && posts?.map((post) => {
            return (
              <BlogItem key={nanoid()} title={post.title} cover={post.cover} author={post.author} _id={post._id}/>
            )
          })}
        </Row>
      </Container>
      <ResponsivePagination
          current={currentPage}
          total={posts && posts.totalPages}
          onPageChange={handlePagination}
      />
    </>
  );
};

export default BlogList;
