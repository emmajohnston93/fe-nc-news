import { useState } from 'react';
import Articles from './Articles';
import Users from './Users';
import Comments from './Comments';
import Home from './Home';
import SingleArticle  from './SingleArticle';
import { Route, Routes, Link } from "react-router-dom"
import './App.css'


function App() {

    return (
<div>
    <nav className='nav'>
        <Link to="/">Home</Link> | <Link to="/articles">All Articles</Link> |  <Link to="/users">User</Link>
    </nav>
    <h1 className='header'>NC News</h1>

    <Routes>
        <Route path ="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/users" element={<Users />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/articles/:article_id" element ={<SingleArticle />} />
    </Routes>
</div>
    )

 }




export default App
