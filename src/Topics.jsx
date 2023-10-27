import { useEffect, useState } from "react";
import { getArticlesByTopic } from "./Api";

function TopicsDropdown({setSelectedTopic}) {
    const [topics, setTopics] = useState([])
    useEffect(() => {
     getArticlesByTopic().then((topicsFromApi) => {
     setTopics(topicsFromApi)   
     })
    }, [])

    return (
        <div>
<p> Select a topic: </p>
<select className="topic-dropdown" name="topics" id="topics" onChange={(event) => {
setSelectedTopic(event.target.value)
}}>
   <option value=''> all </option> 
   {topics.map((topic) => {
    return <option value={topic.slug} key={topic.slug}>{topic.slug}</option>
   })}
</select>
       </div>
    )
}

export default TopicsDropdown
