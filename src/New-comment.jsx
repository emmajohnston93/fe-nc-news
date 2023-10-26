import { addComment } from "./Api";
import { useEffect, useState } from "react"

function NewComment({article_id, setComments, loggedInUser}) {
 const [comments, setNewComment] = useState('');
 const [commentBody, setCommentBody] = useState('')
 const [isError, setIsError] = useState(false)


 function handleSubmit(event) {
    event.preventDefault()
 setComments((comments) => {
return [{author: loggedInUser, body: commentBody, votes: 0}, ...comments]
 })
    addComment(article_id, loggedInUser, commentBody).catch((err) => {
        setIsError(true);
        setComments((comments) => {
         const newComments = [...comments]   
    newComments.shift()
    return newComments       

        })
 }) }


 return <div>
 <form onSubmit={handleSubmit} action="submit" id="new-comment">
    <ul><label>Username:</label><input type="text" id="comment-author" value={loggedInUser} ></input></ul>
<ul><label>Comment:</label><input type="text" id="comment" value={commentBody} onChange={(e) => setCommentBody(e.target.value)}></input></ul> 
 <button type="submit">submit</button>
 <button type="reset">reset</button>
 </form>
{isError? <p> something went wrong and your comment did't post, please try again </p> : null}
 </div>

}

export default NewComment