import { useParams } from "react-router-dom";
import { getComments } from "./Api";
import { useState, useEffect } from "react";

function Comments() {
    const { article_id } = useParams();
    const [comments, setComments] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getComments(article_id).then((commentsFromApi) => {
         setComments(commentsFromApi);
         setIsLoading(false);
})
.catch((err) => {
setIsError(true);
setIsLoading(false)
})

}, [])

if (isLoading) {
return <div>Won't be long, just loading...</div>
}

if (isError)
return <div>Error: Something went wrong </div>

     return (

        <div>

<ul className='comments-list'>
            {comments.map((comment) => {
                return <li className='comment-card' key={comment.comment_id}>
                    <p> Author: {comment.author} </p>
                    <p> {comment.body} </p>
                    <p> Votes: {comment.votes} </p>
                </li>
            })}
        </ul>




    </div>
    
)}


export default Comments