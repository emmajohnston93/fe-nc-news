import { getArticles } from './Api'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import TopicsDropdown from './Topics'


function Articles({selectedTopic, setSelectedTopic}) {
const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false)

useEffect(() => {
    getArticles().then((articlesFromApi) => {
    if (selectedTopic) {
    const filteredArticles = articlesFromApi.filter((article) =>{     
        console.log(selectedTopic)
    return article.topic === selectedTopic
    })
    console.log(filteredArticles)
    setArticles(filteredArticles)
    }  else {

setArticles(articlesFromApi);
    }
    setIsLoading(false);
    })
    .catch((err) => {
        setIsError(true);
        setIsLoading(false)
    })

}, [selectedTopic])



if (isLoading) {
    return <div>Won't be long, just loading...</div>
}

if (isError)
return <div>Error: Something went wrong </div>

return (
    <div>
< TopicsDropdown setSelectedTopic={setSelectedTopic}  />
        <ul className='article-list'>
            {articles.map((article) => {
                return <li className='article-card' key={article.article_id}>
                    <img src={article.article_img_url} />
                    <Link to={`/articles/${article.article_id}`}>
                    <h3>{article.title} </h3>
                    </Link>
                    <p> Topic: {article.topic} </p>
                    <p> Author: {article.author} </p>
                   
                </li>
            })}
        </ul>


    </div>
)
}


export default Articles