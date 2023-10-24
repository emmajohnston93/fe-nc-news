import { useParams } from "react-router-dom";
import { getSingleArticle } from "./Api";
import { useState, useEffect } from "react";

function SingleArticle() {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState ([])

useEffect(() => {
getSingleArticle(article_id).then((singleArticleFromApi) => {
 setSingleArticle(singleArticleFromApi);

})


}, [])

return (

<div>
      <h2>{singleArticle.title}</h2>
      <p>Topic: {singleArticle.topic}</p>
      <p>Author: {singleArticle.author}</p>
      <p>{singleArticle.body}</p>
      <p>{singleArticle.votes}</p>
      <img src={singleArticle.article_img_url} />

    </div>


)
}


export default SingleArticle