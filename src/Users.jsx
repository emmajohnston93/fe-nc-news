import { useEffect, useState } from "react";
import { getUsers } from "./Api";


function Users({setLoggedInUser}) {
const [users, setUsers] = useState([])    

const handleClick = (event) => {
setLoggedInUser(event.target.value)
}


useEffect(() => {
getUsers().then((users) => {
setUsers(users)
}) 
 })  
 return <ul>
    {users.map((user) => { return <li><button onClick={handleClick} value={user.username}> {user.username} </button></li>
    })}
 </ul> 
}

export default Users