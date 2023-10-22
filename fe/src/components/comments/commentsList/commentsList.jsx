import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {nanoid} from 'nanoid'
import useSession from '../../../hooks/useSession'
import BlogAuthor from '../../blog/blog-author/BlogAuthor'

const CommentsList = () => {

    const session = useSession()

    const [comments, setComments] = useState([])

    const {id} = useParams()

    const getCommentsPost = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/blogPost/${id}/comments`)
        setComments(response.data.comments)
        console.log(response.data.comments);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      getCommentsPost()
    }, [])

    const deleteComment = async () => {
      
    }
    
  
    return (
      <>
        <Container className="mt-5">
          <Row>
              {comments && comments?.map((comment) => {
                if(session.id === comment.authorId._id) {
                  return (
                    <Col lg="4" className="mx-auto" key={nanoid()}>
                      <Card className="mt-3">
                        <Card.Header>
                            <Row>
                            <BlogAuthor {...comment.authorId} />
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Rate: {comment.rate}</Card.Title>
                            <Card.Text>
                            <Row>
                                <Col>
                                {comment.comment}
                                </Col>
                                <Col>
                                <Button variant="danger" onClick={deleteComment}>Delete Comment</Button>
                                </Col>
                            </Row>
                            </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                } else {
                  return (
                    <Col lg="4" className="mx-auto" key={nanoid()}>
                        <Card className="mt-3">
                          <Card.Header>
                              <Row>
                              <BlogAuthor {...comment.authorId} />
                              </Row>
                          </Card.Header>
                          <Card.Body>
                              <Card.Title>Rate: {comment.rate}</Card.Title>
                              <Card.Text>
                              <Row>
                                  <Col>
                                  {comment.comment}
                                  </Col>
                              </Row>
                              </Card.Text>
                          </Card.Body>
                        </Card>
                    </Col>
                  )
                }
              })}
          </Row>
        </Container>
      </>
    );
};

export default CommentsList