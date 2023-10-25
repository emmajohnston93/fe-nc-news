import { useParams } from "react-router-dom";
import { getSingleArticle } from "./Api";
import { useState, useEffect } from "react";
import Comments from "./Comments";
import Voter from "./Voter";

function SingleArticle() {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [currentVotes, setVotes] = useState(0);
console.log(currentVotes, "current votes")
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
      <Voter voter={Voter} article_id={article_id} currentVotes={currentVotes} setVotes={setVotes} />
      <img src={singleArticle.article_img_url} />
      <h3>Comments for this article..</h3>
     <Comments comments={Comments} />

    </div>

    


)
}


export default SingleArticle