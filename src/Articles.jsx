import { getArticles } from './Api'
import { useEffect, useState } from "react"

function Articles() {
const [articles, setArticles] = useState([])

useEffect(() => {
    getArticles().then((articlesFromApi) => {
    setArticles(articlesFromApi)
    })

}, [])

return (
    <div>
        <ul className='articles-list'>
            {articles.map((article) => {
                return <li className='article-card' key={article.article_id}>
                    <img src={article.article_img_url} />
                    <h3>{article.title} </h3>
                    <p> Topic: {article.topic} </p>
                    <p> Author: {article.author} </p>
                </li>
            })}
        </ul>


    </div>
)
}


export default Articles