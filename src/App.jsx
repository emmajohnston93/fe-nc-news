import { useState } from 'react';
import Articles from './Articles';
import Users from './Users';
import User from './User';
import Comments from './Comments';
import Home from './Home';
import SingleArticle  from './SingleArticle';
import TopicsDropdown from './Topics';
import { Route, Routes, Link } from "react-router-dom"
import './App.css'



function App() {
  const [loggedInUser, setLoggedInUser] = useState('jessjelly')  
  const [selectedTopic, setSelectedTopic] = useState('')

    return (
<div>
    
    <nav className='nav'>
        <Link to="/">Home</Link> | <Link to="/articles">All Articles</Link> |  <Link to="/users">User</Link>
    </nav>
    < User loggedInUser={loggedInUser}/>
    <h1 alt="The background of this header is the Northcoders logo" className='header'>NC News</h1>
   

    <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/articles" element={<Articles selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic}/>} />
        <Route path="/users" element={<Users setLoggedInUser={setLoggedInUser}/>}  />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
        <Route path="/articles/:article_id" element={<SingleArticle loggedInUser={loggedInUser} />}/> 
    </Routes>
</div>
    )

 }




export default App
