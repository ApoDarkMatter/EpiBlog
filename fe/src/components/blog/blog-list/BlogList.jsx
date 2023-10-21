import React, { useEffect, useState } from "react";
import BlogItem from "../blog-item/BlogItem"
import axios from "axios";
import { Container, Row } from "react-bootstrap";


const BlogList = () => {

  const [posts, setPosts] = useState()

  const getBlogPosts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/blogPost/`)
      setPosts(response.data.post)
      console.log(response.data.post);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBlogPosts()
  }, [])
  

  return (
    <>
      <Container>
        <Row>
          {posts && posts?.map((post) => {
            return (
              <BlogItem title={post.title} cover={post.cover} author={post.author} _id={post._id}/>
            )
          })}
        </Row>
      </Container>
    </>
  );
};

export default BlogList;
