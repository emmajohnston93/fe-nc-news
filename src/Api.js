import axios from "axios";

const ncNewsApi = axios.create({baseURL: 'https://be-nc-news-ncnt.onrender.com/api'})

export function getArticles() {
    return ncNewsApi.get('/articles').then((body) => {
        console.log(body)
  return body.data.articles
    })
   
    }    


