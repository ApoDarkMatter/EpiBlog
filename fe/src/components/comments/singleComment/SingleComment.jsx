import React from 'react'

function SingleComment(comment) {
  return (
    <div>{comment.comment - comment.rate}</div>
  )
}

export default SingleComment