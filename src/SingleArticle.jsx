import { useParams } from "react-router-dom";
import { getSingleArticle } from "./Api";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import Voter from "./Voter";
import NewComment from "./New-comment";

function SingleArticle({loggedInUser}) {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [currentVotes, setVotes] = useState(0);
    const [comments, setComments] = useState ([]);
useEffect(() => {
getSingleArticle(article_id).then((singleArticleFromApi) => {
 setSingleArticle(singleArticleFromApi);
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

<div className='singleArticle-card'>

      <h2>{singleArticle.title}</h2>
      <p>Topic: {singleArticle.topic}</p>
      <p>Author: {singleArticle.author}</p>
      <p>{singleArticle.body}</p>
      <p>Votes: {singleArticle.votes + currentVotes}</p>
      <Voter article_id={article_id} currentVotes={currentVotes} setVotes={setVotes} />
      <img src={singleArticle.article_img_url} />
      <h3>Comments for this article! add yours...</h3>
      <NewComment article_id={article_id} setComments={setComments} loggedInUser={loggedInUser} />
     <Comments comments={comments} setComments={setComments} />

    </div>

    


)
}


export default SingleArticle