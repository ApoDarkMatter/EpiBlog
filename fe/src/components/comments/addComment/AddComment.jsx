import React, { useState } from 'react'
import axios from "axios";
import useSession from "../../../hooks/useSession";
import { useParams } from 'react-router-dom';
import { Button, Form, InputGroup } from 'react-bootstrap';


const AddComment = () => {
    const [comment, setComment] = useState("")
    const [rate, setRate] = useState("")

    const {id} = useParams()

    const session = useSession()


    const formData = {
        rate: rate,
        comment: comment,
        postId: id,
        authorId: session.id,
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/blogPost/${id}`,formData)
            console.log("Comment saved correctly:", response.data);
          } catch (error) {
            console.log("Error:", error);
          }
    }


    return (
        <>
            <Form
                className="mt-5"
                onSubmit={handleSubmit}
                >
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Comment</InputGroup.Text>
                <Form.Control
                placeholder="Comment"
                aria-label="Comment"
                aria-describedby="basic-addon1"
                onChange={(e) => setComment(e.target.value)}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Rate</InputGroup.Text>
                <Form.Control
                placeholder="Rate"
                aria-label="Rate"
                aria-describedby="basic-addon1"
                onChange={(e) => setRate(e.target.value)}
                />
            </InputGroup>
            <Form.Group className="d-flex mt-3 justify-content-end">
            <Button
                type="submit"
                size="lg"
                variant="dark"
                style={{
                marginLeft: "1em",
                }}
            >
                Add Comment
            </Button>
            </Form.Group>
            </Form>
        </>
  )
}

export default AddComment