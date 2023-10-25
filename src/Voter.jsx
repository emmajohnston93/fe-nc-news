import { addVote } from './Api'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';


function Voter({article_id, currentVotes, setVotes}) {
const [hasVoted, setHasVoted] = useState(false);


const updateVote = () => {
let vote = 1    
if (hasVoted) {vote = 0}
setVotes(vote)
addVote(article_id, vote? 1 : -1)
setHasVoted((hasVoted) => {
return !hasVoted
}) 

}

    
return(
    <div>
    <button className='voter-button' onClick={updateVote}> Add your vote 🤎 </button>
    </div>



)
}



    



export default Voter