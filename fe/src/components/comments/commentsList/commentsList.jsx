import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {nanoid} from 'nanoid'

const CommentsList = () => {

    const [comments, setComments] = useState([])

    const {id} = useParams()

    const getCommentsPost = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/blogPost/${id}/comments`)
        setComments(response.data.comments)
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      getCommentsPost()
    }, [comments])
    
  
    return (
      <>
        <Container>
          <Row>
            {comments && comments?.map((comment) => {
              return (
                <p key={nanoid()}>{comment.comment} - {comment.rate}</p>
              )
            })}
          </Row>
        </Container>
      </>
    );
};

export default CommentsList