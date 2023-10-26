import axios from "axios";

const ncNewsApi = axios.create({baseURL: 'https://be-nc-news-ncnt.onrender.com/api'})

export function getArticles() {
    return ncNewsApi.get('/articles').then((body) => {
  return body.data.articles
    })
   
    }    

    export function getSingleArticle(article_id) {
    return ncNewsApi.get(`/articles/${article_id}`).then((body) => {
    return body.data.article

    })   

    }


    export function getComments(article_id) {
      return ncNewsApi.get(`/articles/${article_id}/comments`).then((body) => {
      return body.data.comments
  
      })   
  
      }

  export function addVote(article_id, votes) {
    return ncNewsApi.patch(`/articles/${article_id}`, {inc_votes: votes}).then((body) => {
      return body.data.article.votes
    })
  }    

  export function addComment(article_id, commentAuthor, commentBody ) {
    return ncNewsApi.post(`/articles/${article_id}/comments`, {username: commentAuthor, body: commentBody}).then((body) => {
     console.log(body.data)
      return body.data.comment
    })
  }    

  export function getUsers() {
  return ncNewsApi.get('/users').then((body) => {
    return body.data.users
  })  
  }



