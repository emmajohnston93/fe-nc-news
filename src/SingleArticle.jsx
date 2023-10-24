import { useParams } from "react-router-dom";
import { getSingleArticle } from "./Api";
import { useState, useEffect } from "react";
import Comments from "./Comments";

function SingleArticle() {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null)

useEffect(() => {
getSingleArticle(article_id).then((singleArticleFromApi) => {
 setSingleArticle(singleArticleFromApi);
 setIsLoading(false);
})
.catch((err) => {
setIsError(err);
setIsLoading(false)
})

}, [])

if (isLoading) {
return <div>Won't be long, just loading...</div>
}

if (isError)
return <div>Error: {error.message} </div>

return (

<div className='singleArticle-card'>
      <h2>{singleArticle.title}</h2>
      <p>Topic: {singleArticle.topic}</p>
      <p>Author: {singleArticle.author}</p>
      <p>{singleArticle.body}</p>
      <p>Votes: {singleArticle.votes}</p>
      <img src={singleArticle.article_img_url} />
      <h3>Comments for this article..</h3>

      
      <Comments comments={Comments} />

    </div>

    


)
}


export default SingleArticle